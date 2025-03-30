<template>
    <div
        class="relative m-1 flex min-h-32 min-w-52 justify-end rounded-xl bg-yellow-200 dark:bg-yellow-900 dark:text-background p-2 shadow-lg">
        <div class="absolute top-5 left-5 size-14 text-yellow-500">
            <svg
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M24 18V26M24 34H23.98M27.42 7.72004L44.36 36C44.7092 36.6049 44.894 37.2906 44.896 37.9891C44.8979 38.6875 44.717 39.3743 44.3711 39.9811C44.0252 40.5879 43.5265 41.0935 42.9245 41.4477C42.3226 41.802 41.6384 41.9924 40.94 42H7.05996C6.36156 41.9924 5.67734 41.802 5.07537 41.4477C4.47341 41.0935 3.97468 40.5879 3.62881 39.9811C3.28294 39.3743 3.10198 38.6875 3.10394 37.9891C3.10589 37.2906 3.29069 36.6049 3.63996 36L20.58 7.72004C20.9365 7.13226 21.4385 6.64628 22.0376 6.30901C22.6366 5.97174 23.3125 5.79456 24 5.79456C24.6874 5.79456 25.3633 5.97174 25.9623 6.30901C26.5614 6.64628 27.0634 7.13226 27.42 7.72004Z"
                    stroke="currentColor"
                    stroke-width="4"
                    stroke-linecap="round"
                    stroke-linejoin="round" />
            </svg>
        </div>

        <div class="flex max-w-2/3 flex-col items-end gap-2 p-4 pl-10 text-end">
            <span class="text-2xl font-bold">Alert Notification</span>
            <p>
                This is a notification message. It can contain any content you
                like.
            </p>
        </div>
    </div>

    <div
        class="relative m-1 flex min-h-32 min-w-52 justify-end rounded-xl bg-red-200 dark:text-background dark:bg-red-900 p-2 shadow-lg">
        <div class="absolute top-5 left-5 size-14 text-red-500">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 36 36">
                <path
                    stroke="#FB2C36"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="3"
                    d="m13.5 13.5 9 9m0-9-9 9M3 18a15 15 0 1 0 30 0 15 15 0 0 0-30 0Z" />
            </svg>
        </div>

        <div class="flex max-w-2/3 flex-col items-end gap-2 p-4 pl-10 text-end">
            <span class="text-2xl font-bold">Error Notification</span>
            <p>
                This is a notification message. It can contain any content you
                like.
            </p>
        </div>
    </div>

    <div
        class="relative m-1 flex min-h-32 min-w-52 justify-end rounded-xl bg-blue-200 dark:bg-blue-900 dark:text-background p-2 shadow-lg">
        <div class="absolute top-5 left-5 size-14 text-blue-500">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 36 36">
                <path
                    stroke="#2B7FFF"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="3"
                    d="M33 16.6V18a15 15 0 1 1-8.9-13.7M33 6 18 21l-4.5-4.5" />
            </svg>
        </div>

        <div class="flex max-w-2/3 flex-col items-end gap-2 p-4 pl-10 text-end">
            <span class="text-2xl font-bold">Done Notification</span>
            <p>
                This is a notification message. It can contain any content you
                like.
            </p>
        </div>
    </div>
</template>
