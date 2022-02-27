const Create = () => {
    return (
        <div className="max-w-screen-sm flex flex-col items-start m-auto">
            <input type="text" placeholder="Name" class="input w-full bg-base-200 h-16 mb-10" />

            <textarea type="text" placeholder="Description" class="input w-full bg-base-200 h-32 p-4" />

        </div>
    )
}

export default Create;