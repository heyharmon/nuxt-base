<template>
  <div class="password-strength flex flex-column gap-xxs margin-bottom-md js-password-strength">
    <ul class="text-sm">
      <li 
        v-for="condition in conditions"
        :class="{ 'password-strength__req--met': checkSingleCondition(password, condition.requirement) }" 
        class="password-strength__req"
      >
        <svg class="icon" viewBox="0 0 16 16" aria-hidden="true"><g class="password-strength__icon-group" fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"><line x1="-6" y1="8" x2="8" y2="8" /><line x1="8" y1="8" x2="22" y2="8" /></g></svg>
        <span>{{ condition.description }}</span>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import zxcvbn from 'zxcvbn'

const props = defineProps({
  /**
   * The password
   * @type {String}
   */
  password: {
    type: String,
    required: true,
  },
  // /**
  //  * Password format conditions
  //  * Requirements for the password format.
  //  * @type {Array}
  //  */
  // conditions: {
  //   type: Array,
  // },
  // /**
  //  * Password min length
  //  * Right now only visual for the badge.
  //  * @type {Number}
  //  */
  // secureLength: {
  //   type: Number,
  //   default: 12,
  // },
})

// TODO: accept conditions as a prop
let conditions = [
  {
    requirement: 'length:12', 
    description: 'At least 12 characters',
  },
  {
    requirement: 'letterAndNumber', 
    description: 'Letters and numbers',
  },
  {
    requirement: 'mixedCase', 
    description: 'Uppercase and lowercase',
  },
  {
    requirement: 'special', 
    description: 'Special characters',
  },
]

// Use zxcvbn library to check password strength
let passwordStrength = computed(() => {
  return props.password ? zxcvbn(props.password).score : null
})

// Check if all conditions are satisfied
let conditionsSatisfied = computed(() => {
  let count = 0
  conditions.forEach(condition => {
    checkSingleCondition(props.password, condition.requirement) ? count++ : count
  })
  return count == conditions.length
})

function checkSingleCondition(value, req) {
  var result;
  switch (true) {
    // Require at least one letter
    case (req == 'letter'):
      result = /[a-zA-Z]/.test(value)
      break
    // Require at least one number
    case (req == 'number'):
      result = /\d/.test(value)
      break
    // Require at least one letter and one number
    case (req == 'letterAndNumber'):
      result = /[a-zA-Z]/.test(value) && /\d/.test(value)
      break
    // Require at least one uppercase letter
    case (req == 'uppercase'):
      result = (value.toLowerCase() != value)
      break
    // Require at least one lowercase letter
    case (req == 'lowercase'):
      result = (value.toUpperCase() != value)
      break
    // Require at least one uppercase and one lower case letter
    case (req == 'mixedCase'):
      result = (value.toLowerCase() != value) && (value.toUpperCase() != value)
      break
    // Require at least one special character (e.g., !@#$%^&*()_+)
    case (req == 'special'):
      result = /[!@#$%^&*=~`'"|/\?\_\-\,\;\.\:\(\)\{\}\[\]\+\>\<\\]/.test(value)
      break
    // Require a specific minimum password length
    case (req.indexOf('length:') == 0):
      var reqArray = req.split(':')
      result = (value.length >= parseInt(reqArray[1]))
      if (reqArray.length > 2 && result) result = (value.length <= parseInt(reqArray[2]))
      break
    default:
      result = false
      break
  }
  return result;
};
</script>