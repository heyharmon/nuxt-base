<template>
    <section class="mx-auto max-w-7xl px-6 mt-10 mb-20">
        <p class="text-lg font-semibold text-slate-900 mb-7">Headings</p>

        <div class="mt-8">
            <div class="flex flex-col gap-6">
                <BaseHeading as="h1">The heading size 1</BaseHeading>
                <BaseHeading as="h2">The heading size 2</BaseHeading>
                <BaseHeading as="h3">The heading size 3</BaseHeading>
                <BaseHeading as="h4">The heading size 4</BaseHeading>
                <BaseHeading as="h5">The heading size 5</BaseHeading>
                <BaseHeading as="h6">The heading size 6</BaseHeading>
            </div>
        </div>
    </section>

    <section class="mx-auto max-w-7xl px-6 my-10">
        <p class="text-lg font-semibold text-slate-900 mb-7">Buttons</p>

        <div class="mt-8">
            <h2 class="text-md font-semibold text-slate-900 mb-2">Bold button</h2>

            <div class="flex items-center gap-6">
                <BaseButton to="#" label="Button text" variant="bold" size="lg"/>
                <BaseButton to="#" label="Button text" variant="bold" size="base"/>
                <BaseButton to="#" label="Button text" variant="bold" size="sm"/>
            </div>
        </div>

        <div class="mt-8">
            <h2 class="text-md font-semibold text-slate-900 mb-2">Light button</h2>

            <div class="flex items-center gap-6">
                <BaseButton to="#" label="Button text" variant="light" size="lg"/>
                <BaseButton to="#" label="Button text" variant="light" size="base"/>
                <BaseButton to="#" label="Button text" variant="light" size="sm"/>
            </div>
        </div>

        <div class="mt-8">
            <h2 class="text-md font-semibold text-slate-900 mb-2">Ghost button</h2>

            <div class="flex items-center gap-6">
                <BaseButton to="#" label="Button text" variant="ghost" size="lg"/>
                <BaseButton to="#" label="Button text" variant="ghost" size="base"/>
                <BaseButton to="#" label="Button text" variant="ghost" size="sm"/>
            </div>
        </div>

        <div class="mt-8">
            <h2 class="text-md font-semibold text-slate-900 mb-2">Text button</h2>

            <div class="flex items-center gap-6">
                <BaseButton to="#" label="Button text" variant="text" size="lg"/>
                <BaseButton to="#" label="Button text" variant="text" size="base"/>
                <BaseButton to="#" label="Button text" variant="text" size="sm"/>
            </div>
        </div>
    </section>

    <section class="mx-auto max-w-7xl px-6 my-10">
        <p class="text-lg font-semibold text-slate-900 mb-7">Colors</p>

        <div class="mt-8">
            <h2 class="text-md font-semibold text-slate-900 mb-2">Primary</h2>
            
            <div class="flex gap-4" data-theme="base">   
                <div class="grid h-16 w-16 place-items-end bg-primary-50 rounded-md p-1 font-semibold leading-none text-primary-900">
                50
                </div>
                <div class="grid h-16 w-16 place-items-end bg-primary-100 rounded-md p-1 font-semibold leading-none text-primary-900">
                100
                </div>
                <div class="grid h-16 w-16 place-items-end bg-primary-200 rounded-md p-1 font-semibold leading-none text-primary-900">
                200
                </div>
                <div class="grid h-16 w-16 place-items-end bg-primary-300 rounded-md p-1 font-semibold leading-none text-primary-900">
                300
                </div>
                <div class="grid h-16 w-16 place-items-end bg-primary-400 rounded-md p-1 font-semibold leading-none text-primary-900">
                400
                </div>
                <div class="grid h-16 w-16 place-items-end bg-primary-500 rounded-md p-1 font-semibold leading-none text-primary-50">
                500
                </div>
                <div class="grid h-16 w-16 place-items-end bg-primary-600 rounded-md p-1 font-semibold leading-none text-primary-50">
                600
                </div>
                <div class="grid h-16 w-16 place-items-end bg-primary-700 rounded-md p-1 font-semibold leading-none text-primary-50">
                700
                </div>
                <div class="grid h-16 w-16 place-items-end bg-primary-800 rounded-md p-1 font-semibold leading-none text-primary-50">
                800
                </div>
                <div class="grid h-16 w-16 place-items-end bg-primary-900 rounded-md p-1 font-semibold leading-none text-primary-50">
                900
                </div>
            </div>
        </div>

        <div class="mt-8">
            <h2 class="text-md font-semibold text-slate-900 mb-2">Secondary</h2>

            <div class="flex gap-4" data-theme="theme-1">
                <div class="grid h-16 w-16 place-items-end bg-secondary-50 rounded-md p-1 font-semibold leading-none text-primary-900">
                50
                </div>
                <div class="grid h-16 w-16 place-items-end bg-secondary-100 rounded-md p-1 font-semibold leading-none text-primary-900">
                100
                </div>
                <div class="grid h-16 w-16 place-items-end bg-secondary-200 rounded-md p-1 font-semibold leading-none text-primary-900">
                200
                </div>
                <div class="grid h-16 w-16 place-items-end bg-secondary-300 rounded-md p-1 font-semibold leading-none text-primary-900">
                300
                </div>
                <div class="grid h-16 w-16 place-items-end bg-secondary-400 rounded-md p-1 font-semibold leading-none text-primary-900">
                400
                </div>
                <div class="grid h-16 w-16 place-items-end bg-secondary-500 rounded-md p-1 font-semibold leading-none text-primary-50">
                500
                </div>
                <div class="grid h-16 w-16 place-items-end bg-secondary-600 rounded-md p-1 font-semibold leading-none text-primary-50">
                600
                </div>
                <div class="grid h-16 w-16 place-items-end bg-secondary-700 rounded-md p-1 font-semibold leading-none text-primary-50">
                700
                </div>
                <div class="grid h-16 w-16 place-items-end bg-secondary-800 rounded-md p-1 font-semibold leading-none text-primary-50">
                800
                </div>
                <div class="grid h-16 w-16 place-items-end bg-secondary-900 rounded-md p-1 font-semibold leading-none text-primary-50">
                900
                </div>
            </div>
        </div>

        <div class="mt-8">
            <h2 class="text-md font-semibold text-slate-900 mb-2">Theme 2</h2>

            <div class="flex gap-4" data-theme="theme-2">
                <div class="grid h-16 w-16 place-items-end bg-accent-50 rounded-md p-1 font-semibold leading-none text-primary-900">
                50
                </div>
                <div class="grid h-16 w-16 place-items-end bg-accent-100 rounded-md p-1 font-semibold leading-none text-primary-900">
                100
                </div>
                <div class="grid h-16 w-16 place-items-end bg-accent-200 rounded-md p-1 font-semibold leading-none text-primary-900">
                200
                </div>
                <div class="grid h-16 w-16 place-items-end bg-accent-300 rounded-md p-1 font-semibold leading-none text-primary-900">
                300
                </div>
                <div class="grid h-16 w-16 place-items-end bg-accent-400 rounded-md p-1 font-semibold leading-none text-primary-900">
                400
                </div>
                <div class="grid h-16 w-16 place-items-end bg-accent-500 rounded-md p-1 font-semibold leading-none text-primary-50">
                500
                </div>
                <div class="grid h-16 w-16 place-items-end bg-accent-600 rounded-md p-1 font-semibold leading-none text-primary-50">
                600
                </div>
                <div class="grid h-16 w-16 place-items-end bg-accent-700 rounded-md p-1 font-semibold leading-none text-primary-50">
                700
                </div>
                <div class="grid h-16 w-16 place-items-end bg-accent-800 rounded-md p-1 font-semibold leading-none text-primary-50">
                800
                </div>
                <div class="grid h-16 w-16 place-items-end bg-accent-900 rounded-md p-1 font-semibold leading-none text-primary-50">
                900
                </div>
            </div>
        </div>
    </section>

    <!-- THEMES -->
    <!-- <section class="mx-auto max-w-7xl px-6 my-10">
        <p class="text-lg font-semibold text-slate-900 mb-7">Color themes</p>

        <div class="mt-8">
            <h2 class="text-md font-semibold text-slate-900 mb-2">Base</h2>
            
            <div class="flex gap-4" data-theme="base">   
                <div class="grid h-16 w-16 place-items-end bg-primary-50 rounded-md p-1 font-semibold leading-none text-primary-900">
                50
                </div>
                <div class="grid h-16 w-16 place-items-end bg-primary-100 rounded-md p-1 font-semibold leading-none text-primary-900">
                100
                </div>
                <div class="grid h-16 w-16 place-items-end bg-primary-200 rounded-md p-1 font-semibold leading-none text-primary-900">
                200
                </div>
                <div class="grid h-16 w-16 place-items-end bg-primary-300 rounded-md p-1 font-semibold leading-none text-primary-900">
                300
                </div>
                <div class="grid h-16 w-16 place-items-end bg-primary-400 rounded-md p-1 font-semibold leading-none text-primary-900">
                400
                </div>
                <div class="grid h-16 w-16 place-items-end bg-primary-500 rounded-md p-1 font-semibold leading-none text-primary-50">
                500
                </div>
                <div class="grid h-16 w-16 place-items-end bg-primary-600 rounded-md p-1 font-semibold leading-none text-primary-50">
                600
                </div>
                <div class="grid h-16 w-16 place-items-end bg-primary-700 rounded-md p-1 font-semibold leading-none text-primary-50">
                700
                </div>
                <div class="grid h-16 w-16 place-items-end bg-primary-800 rounded-md p-1 font-semibold leading-none text-primary-50">
                800
                </div>
                <div class="grid h-16 w-16 place-items-end bg-primary-900 rounded-md p-1 font-semibold leading-none text-primary-50">
                900
                </div>
            </div>
        </div>

        <div class="mt-8">
            <h2 class="text-md font-semibold text-slate-900 mb-2">Theme 1</h2>

            <div class="flex gap-4" data-theme="theme-1">
                <div class="grid h-16 w-16 place-items-end bg-primary-50 rounded-md p-1 font-semibold leading-none text-primary-900">
                50
                </div>
                <div class="grid h-16 w-16 place-items-end bg-primary-100 rounded-md p-1 font-semibold leading-none text-primary-900">
                100
                </div>
                <div class="grid h-16 w-16 place-items-end bg-primary-200 rounded-md p-1 font-semibold leading-none text-primary-900">
                200
                </div>
                <div class="grid h-16 w-16 place-items-end bg-primary-300 rounded-md p-1 font-semibold leading-none text-primary-900">
                300
                </div>
                <div class="grid h-16 w-16 place-items-end bg-primary-400 rounded-md p-1 font-semibold leading-none text-primary-900">
                400
                </div>
                <div class="grid h-16 w-16 place-items-end bg-primary-500 rounded-md p-1 font-semibold leading-none text-primary-50">
                500
                </div>
                <div class="grid h-16 w-16 place-items-end bg-primary-600 rounded-md p-1 font-semibold leading-none text-primary-50">
                600
                </div>
                <div class="grid h-16 w-16 place-items-end bg-primary-700 rounded-md p-1 font-semibold leading-none text-primary-50">
                700
                </div>
                <div class="grid h-16 w-16 place-items-end bg-primary-800 rounded-md p-1 font-semibold leading-none text-primary-50">
                800
                </div>
                <div class="grid h-16 w-16 place-items-end bg-primary-900 rounded-md p-1 font-semibold leading-none text-primary-50">
                900
                </div>
            </div>
        </div>

        <div class="mt-8">
            <h2 class="text-md font-semibold text-slate-900 mb-2">Theme 2</h2>

            <div class="flex gap-4" data-theme="theme-2">
                <div class="grid h-16 w-16 place-items-end bg-primary-50 rounded-md p-1 font-semibold leading-none text-primary-900">
                50
                </div>
                <div class="grid h-16 w-16 place-items-end bg-primary-100 rounded-md p-1 font-semibold leading-none text-primary-900">
                100
                </div>
                <div class="grid h-16 w-16 place-items-end bg-primary-200 rounded-md p-1 font-semibold leading-none text-primary-900">
                200
                </div>
                <div class="grid h-16 w-16 place-items-end bg-primary-300 rounded-md p-1 font-semibold leading-none text-primary-900">
                300
                </div>
                <div class="grid h-16 w-16 place-items-end bg-primary-400 rounded-md p-1 font-semibold leading-none text-primary-900">
                400
                </div>
                <div class="grid h-16 w-16 place-items-end bg-primary-500 rounded-md p-1 font-semibold leading-none text-primary-50">
                500
                </div>
                <div class="grid h-16 w-16 place-items-end bg-primary-600 rounded-md p-1 font-semibold leading-none text-primary-50">
                600
                </div>
                <div class="grid h-16 w-16 place-items-end bg-primary-700 rounded-md p-1 font-semibold leading-none text-primary-50">
                700
                </div>
                <div class="grid h-16 w-16 place-items-end bg-primary-800 rounded-md p-1 font-semibold leading-none text-primary-50">
                800
                </div>
                <div class="grid h-16 w-16 place-items-end bg-primary-900 rounded-md p-1 font-semibold leading-none text-primary-50">
                900
                </div>
            </div>
        </div>
    </section> -->
</template>