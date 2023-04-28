<template>
  <div class="relative mt-10 md:mt-[5rem] page">
    <img
      src="https://assets.costapplicationform.com/static/particle-yellow.png"
      alt="header particles"
      format="webp"
      class="page-particle-yellow"
    />
    <img
      src="https://assets.costapplicationform.com/static/particle-blue.png"
      alt="header particles"
      format="webp"
      class="page-particle-blue"
    />
    <img
      src="https://assets.costapplicationform.com/static/particle-red.png"
      alt="header particles"
      format="webp"
      class="page-particle-red"
    />

    <section class="px-4 py-16 lg:py-16">
      <div class="container max-w-8xl mx-auto md:px-4">
        <h1
          class="mb-4 text-[34px] font-medium tracking-tight md:text-[56px] leading-tight md:mb-12 text-dark text-center max-w-[860px] mx-auto"
        >
          Features
        </h1>
        <p class="text-center text-[#767676] text-lg md:text-xl">
          Revolutionize the way you do business with our intelligent tools that
          will elevate your game to new heights.
        </p>
      </div>
    </section>

    <section class="text-dark">
      <div
        class="grid container xl:max-w-[1200px] px-4 py-16 mx-auto gap-y-20 lg:gap-24 lg:py-16 lg:grid-cols-12"
      >
        <div class="lg:col-span-6 mr-auto">
          <h2 class="font-medium text-4xl md:text-4xl mb-6">
            Cost Application Form
          </h2>
          <p class="mb-4 text-[#767676]">
            Introducing our revolutionary Cost Application Form: Streamline your
            expenses and financial management effortlessly. Say goodbye to
            spreadsheets and emails – our tool empowers employees to request
            funds for travel, equipment, and more.
          </p>
          <p class="text-[#767676]">
            With predefined limits for each expense type, align spending with
            your financial goals. Save time, eliminate unnecessary expenses, and
            stay on budget. Join successful businesses that transformed their
            processes with our solution.
          </p>
        </div>
        <div class="place-self-center lg:col-span-6">
          <img
            class="block rounded-xl"
            src="https://assets.costapplicationform.com/static/caf-cost-dashboard.png"
            sizes="sm:100vw md:100vw lg:704px"
            width="704"
            height="404"
            format="webp"
          />
        </div>
      </div>
    </section>

    <section class="text-dark">
      <div
        class="grid container xl:max-w-[1200px] px-4 py-16 mx-auto gap-y-20 lg:gap-24 lg:py-16 lg:grid-cols-12"
      >
        <div class="place-self-center lg:col-span-6">
          <img
            class="block rounded-xl"
            src="https://assets.costapplicationform.com/static/caf-approval-1-min.png"
            sizes="sm:100vw md:100vw lg:704px"
            width="704"
            height="404"
            format="webp"
          />
        </div>
        <div class="lg:col-span-6 mr-auto">
          <h2 class="font-medium text-4xl md:text-4xl mb-6">Cost Approval</h2>
          <p class="mb-4 text-[#767676]">
            Allows organizations to set predefined spending limits for various
            expenses. Employees can then submit expense requests within these
            limits, which are reviewed and approved or denied by designated
            personnel.
          </p>
          <p class="text-[#767676]">
            This process helps companies manage their finances, prevent
            overspending, and ensure that expenses are transparent and
            accountable.
          </p>
        </div>
      </div>
    </section>

    <section class="text-dark">
      <div
        class="grid container xl:max-w-[1200px] px-4 py-16 mx-auto gap-y-20 lg:gap-24 lg:py-16 lg:grid-cols-12"
      >
        <div class="lg:col-span-6 mr-auto">
          <h2 class="font-medium text-4xl md:text-4xl mb-6">
            Cost Categories & Partners
          </h2>
          <p class="mb-4 text-[#767676]">
            Cost categories and partners are key features that organizations use
            to manage their expenses more effectively. Cost categories provide a
            way to group expenses into different categories, making it easier to
            track and analyze spending patterns.
          </p>
          <p class="text-[#767676]">
            Partner integration, on the other hand, simplifies the invoicing and
            payment processes, reducing the time and effort needed to manage
            accounts payable. These features help companies gain better
            visibility and control over their finances, enabling them to make
            more informed business decisions and achieve their financial goals.
          </p>
        </div>
        <div class="place-self-center lg:col-span-6">
          <img
            class="block rounded-xl"
            src="https://assets.costapplicationform.com/static/caf-categories-partners-min.png"
            sizes="sm:100vw md:100vw lg:704px"
            width="704"
            height="404"
            format="webp"
          />
        </div>
      </div>
    </section>

    <section class="text-dark">
      <div
        class="grid container xl:max-w-[1200px] px-4 py-16 mx-auto gap-y-20 lg:gap-24 lg:pt-16 lg:pb-24 lg:grid-cols-12"
      >
        <div class="place-self-center lg:col-span-6">
          <img
            class="block rounded-xl"
            src="https://assets.costapplicationform.com/static/caf-invoices-min.png"
            sizes="sm:100vw md:100vw lg:704px"
            width="704"
            height="404"
            format="webp"
          />
        </div>
        <div class="lg:col-span-6 mr-auto">
          <h2 class="font-medium text-4xl md:text-4xl mb-6">Invoices</h2>
          <p class="mb-4 text-[#767676]">
            Invoices are a key feature that helps businesses manage their
            finances more effectively. They provide a record of goods or
            services provided, the associated costs, and payment terms.
          </p>
          <p class="text-[#767676]">
            By creating and managing invoices, companies can ensure that they
            get paid promptly and accurately for the products or services they
            provide. This feature is critical for businesses of all sizes and
            industries, helping them maintain financial stability and achieve
            long-term success.
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
definePageMeta({
  colorMode: "light",
});

useHead({
  title: "Features",
});
</script>
