import React from 'react'

const Maladie = () => {
    return (
        <div class="main flex border rounded-full overflow-hidden m-4 select-none bg-white w-1/2">
            <div class="title py-3 my-auto px-10 bg-blue-500 text-white text-sm font-semibold mr-3">MAladie</div>
            <label class="flex radio p-2 cursor-pointer w-1/3">
                <input class="my-auto transform scale-125" type="radio" name="sfg" />
                <div class="title px-2">Non</div>
            </label>

            <label class="flex radio p-2 cursor-pointer">
                <input class="my-auto transform scale-125" type="radio" name="sfg" />
                <div class="title px-2">Yes</div>
            </label>

           
        </div>
    )
}

export default Maladie