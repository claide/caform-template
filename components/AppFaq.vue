<template>
  <section class="px-4 py-16 lg:py-24">
    <div
      class="container xl:max-w-[1200px] grid lg:grid-cols-12 lg:gap-24 gap-y-10 mx-auto"
    >
      <div class="lg:col-span-3">
        <h2 class="font-medium text-4xl md:text-5xl mb-16 md:mb-24">FAQ</h2>
      </div>
      <div class="lg:col-span-9">
        <div class="">
          <Disclosure v-slot="{ open }" class="mb-2" as="div">
            <DisclosureButton
              class="flex items-center w-full p-4 text-left text-xl text-dark focus:outline-none border-b-2 border-b-primary"
            >
              <span class="font-bold">Is your software actually works?</span>
              <PlusCircleIcon
                v-if="!open"
                class="h-5 w-5 text-dark stroke-current ml-auto"
              />
              <MinusCircleIcon
                v-else
                class="h-5 w-5 text-dark stroke-current ml-auto"
              />
            </DisclosureButton>
            <transition
              enter-active-class="transition duration-100 ease-out"
              enter-from-class="transform scale-95 opacity-0"
              enter-to-class="transform scale-100 opacity-100"
              leave-active-class="transition duration-75 ease-out"
              leave-from-class="transform scale-100 opacity-100"
              leave-to-class="transform scale-95 opacity-0"
            >
              <DisclosurePanel class="px-4 pt-4 pb-2 text-base text-[#767676]">
                <p class="mb-2">
                  Curabitur tempor quis eros tempus lacinia. Nam bibendum
                  pellentesque quam a convallis. Sed ut vulputate nisi. Integer
                  in felis sed leo vestibulum venenatis. Suspendisse quis arcu
                  sem.
                </p>
                <p class="">
                  Aenean feugiat ex eu vestibulum vestibulum. Morbi a eleifend
                  magna. Nam metus lacus, porttitor eu mauris a, blandit
                  ultrices nibh. Mauris sit amet magna non ligula vestibulum
                  eleifend.
                </p>
              </DisclosurePanel>
            </transition>
          </Disclosure>

          <Disclosure v-slot="{ open }" class="mb-2" as="div">
            <DisclosureButton
              class="flex items-center w-full p-4 text-left text-xl text-dark focus:outline-none border-b-2 border-b-primary"
            >
              <span class="font-bold">How does we make money?</span>
              <PlusCircleIcon
                v-if="!open"
                class="h-5 w-5 text-dark stroke-current ml-auto"
              />
              <MinusCircleIcon
                v-else
                class="h-5 w-5 text-dark stroke-current ml-auto"
              />
            </DisclosureButton>
            <transition
              enter-active-class="transition duration-100 ease-out"
              enter-from-class="transform scale-95 opacity-0"
              enter-to-class="transform scale-100 opacity-100"
              leave-active-class="transition duration-75 ease-out"
              leave-from-class="transform scale-100 opacity-100"
              leave-to-class="transform scale-95 opacity-0"
            >
              <DisclosurePanel class="px-4 pt-4 pb-2 text-base text-[#767676]">
                <p class="mb-2">
                  Curabitur tempor quis eros tempus lacinia. Nam bibendum
                  pellentesque quam a convallis. Sed ut vulputate nisi. Integer
                  in felis sed leo vestibulum venenatis. Suspendisse quis arcu
                  sem.
                </p>
                <p class="">
                  Aenean feugiat ex eu vestibulum vestibulum. Morbi a eleifend
                  magna. Nam metus lacus, porttitor eu mauris a, blandit
                  ultrices nibh. Mauris sit amet magna non ligula vestibulum
                  eleifend.
                </p>
              </DisclosurePanel>
            </transition>
          </Disclosure>

          <Disclosure v-slot="{ open }" class="mb-2" as="div">
            <DisclosureButton
              class="flex items-center w-full p-4 text-left text-xl text-dark focus:outline-none border-b-2 border-b-primary"
            >
              <span class="font-bold"
                >Is my data secure when using Cost Application Form?</span
              >
              <PlusCircleIcon
                v-if="!open"
                class="h-5 w-5 text-dark stroke-current ml-auto"
              />
              <MinusCircleIcon
                v-else
                class="h-5 w-5 text-dark stroke-current ml-auto"
              />
            </DisclosureButton>
            <transition
              enter-active-class="transition duration-100 ease-out"
              enter-from-class="transform scale-95 opacity-0"
              enter-to-class="transform scale-100 opacity-100"
              leave-active-class="transition duration-75 ease-out"
              leave-from-class="transform scale-100 opacity-100"
              leave-to-class="transform scale-95 opacity-0"
            >
              <DisclosurePanel class="px-4 pt-4 pb-2 text-base text-[#767676]">
                <p class="mb-2">
                  Curabitur tempor quis eros tempus lacinia. Nam bibendum
                  pellentesque quam a convallis. Sed ut vulputate nisi. Integer
                  in felis sed leo vestibulum venenatis. Suspendisse quis arcu
                  sem.
                </p>
                <p class="">
                  Aenean feugiat ex eu vestibulum vestibulum. Morbi a eleifend
                  magna. Nam metus lacus, porttitor eu mauris a, blandit
                  ultrices nibh. Mauris sit amet magna non ligula vestibulum
                  eleifend.
                </p>
              </DisclosurePanel>
            </transition>
          </Disclosure>

          <Disclosure v-slot="{ open }" class="mb-2" as="div">
            <DisclosureButton
              class="flex items-center w-full p-4 text-left text-xl text-dark focus:outline-none border-b-2 border-b-primary"
            >
              <span class="font-bold">Do you provide customer support?</span>
              <PlusCircleIcon
                v-if="!open"
                class="h-5 w-5 text-dark stroke-current ml-auto"
              />
              <MinusCircleIcon
                v-else
                class="h-5 w-5 text-dark stroke-current ml-auto"
              />
            </DisclosureButton>
            <transition
              enter-active-class="transition duration-100 ease-out"
              enter-from-class="transform scale-95 opacity-0"
              enter-to-class="transform scale-100 opacity-100"
              leave-active-class="transition duration-75 ease-out"
              leave-from-class="transform scale-100 opacity-100"
              leave-to-class="transform scale-95 opacity-0"
            >
              <DisclosurePanel class="px-4 pt-4 pb-2 text-base text-[#767676]">
                <p class="mb-2">
                  Curabitur tempor quis eros tempus lacinia. Nam bibendum
                  pellentesque quam a convallis. Sed ut vulputate nisi. Integer
                  in felis sed leo vestibulum venenatis. Suspendisse quis arcu
                  sem.
                </p>
                <p class="">
                  Aenean feugiat ex eu vestibulum vestibulum. Morbi a eleifend
                  magna. Nam metus lacus, porttitor eu mauris a, blandit
                  ultrices nibh. Mauris sit amet magna non ligula vestibulum
                  eleifend.
                </p>
              </DisclosurePanel>
            </transition>
          </Disclosure>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";
import { PlusCircleIcon, MinusCircleIcon } from "@heroicons/vue/24/outline";
</script>
