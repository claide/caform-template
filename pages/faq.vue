<template>
  <div class="relative mt-10 md:mt-[5rem] page">
    <img
      src="https://costapplicationform.s3.ap-southeast-1.amazonaws.com/static/particle-yellow.png"
      alt="header particles"
      format="webp"
      class="page-particle-yellow"
    />
    <img
      src="https://costapplicationform.s3.ap-southeast-1.amazonaws.com/static/particle-blue.png"
      alt="header particles"
      format="webp"
      class="page-particle-blue"
    />
    <img
      src="https://costapplicationform.s3.ap-southeast-1.amazonaws.com/static/particle-red.png"
      alt="header particles"
      format="webp"
      class="page-particle-red"
    />
    <section class="px-4 py-16 lg:py-24">
      <div class="container max-w-8xl mx-auto md:px-4">
        <h1
          class="mb-4 text-[34px] font-medium tracking-tight md:text-[56px] leading-tight md:mb-12 text-dark text-center max-w-[860px] mx-auto"
        >
          Frequently Asked Questions
        </h1>
        <p class="text-center text-[#767676] text-lg md:text-xl mb-24">
          Can't find the answer you're looking for? Reach out to our
          <nuxt-link to="/contact-us" class="underline text-primary"
            >customer support</nuxt-link
          >
          team.
        </p>

        <div class="mx-auto w-full max-w-[860px] rounded-2xl bg-white sm:p-2">
          <Disclosure v-slot="{ open }" class="mb-2" as="div">
            <DisclosureButton
              class="flex items-center w-full p-4 text-left text-base text-dark focus:outline-none border-b-2 border-b-primary"
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
              class="flex items-center w-full p-4 text-left text-base text-dark focus:outline-none border-b-2 border-b-primary"
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
              class="flex items-center w-full p-4 text-left text-base text-dark focus:outline-none border-b-2 border-b-primary"
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
              class="flex items-center w-full p-4 text-left text-base text-dark focus:outline-none border-b-2 border-b-primary"
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
    </section>
    <AppCta />
  </div>
</template>

<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";
import { PlusCircleIcon, MinusCircleIcon } from "@heroicons/vue/24/outline";

definePageMeta({
  colorMode: "light",
});

useHead({
  title: "FAQ",
});
</script>
