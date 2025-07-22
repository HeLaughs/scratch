import React from 'react';

function SecureYourCard() {

  return (
    <div class="mx-auto">
      <h1>Secure your Card</h1>
      <form class="flex h-max w-72 flex-col items-center rounded-[10px] bg-blue-200 px-5 py-8" action="">
  <span class="mb-7 text-2xl font-medium text-gray-100">Secure Your Card</span>
  <input class="mb-2.5 w-full rounded border-0 bg-neutral-100 p-2.5 text-sm outline-none focus:shadow-none" type="text" placeholder="Name" required />
  <input class="mb-2.5 w-full rounded border-0 bg-neutral-100 p-2.5 text-sm outline-none focus:shadow-none" type="email" placeholder="Email" required />
  <input class="mb-2.5 w-full rounded border-0 bg-neutral-100 p-2.5 text-sm outline-none focus:shadow-none" type="password" placeholder="Password" required />
  <input class="mb-2.5 w-full rounded border-0 bg-neutral-100 p-2.5 text-sm outline-none focus:shadow-none" type="password" placeholder="Confirm Password" required />
  <div class="flex items-center px-0 py-4">
    <input class="mr-2.5 cursor-pointer rounded checked:bg-[#000080] focus:shadow-none" id="form3-checkbox" type="checkbox" />
    <label class="text-base text-gray-100" for="form3-checkbox">Receive Weekly Emails</label>
  </div>
  <button class="mt-2 cursor-pointer rounded border-2 border-solid border-[#000080] bg-[#cfe1f0] px-8 py-2 text-base font-medium text-gray-100 hover:bg-neutral-100 hover:text-[#000080] hover:transition-all hover:duration-500 hover:ease-in-out" type="submit">Submit</button>
</form>
    </div>
  );
}

export default SecureYourCard;