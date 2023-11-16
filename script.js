function removeinput() {

    const form = document.querySelector('form')
    const name = document.getElementById("nameInput").value
    const email = document.getElementById("emailInput").value
    const phone = document.getElementById("phoneInput").value

    if (name) {
        const infoElement = document.createElement('div');
        const imgPreview = document.getElementById("imgPreview");
        infoElement.appendChild(imgPreview.cloneNode(true));
        infoElement.innerHTML += `
                <h2 class="font-bold text-center">Name: ${name}</h2>
                <h2 class="font-bold text-center">Email: ${email}</h2>
                <h2 class="font-bold text-center">Phone: ${phone}</h2>
            `;

        form.parentNode.replaceChild(infoElement, form)
    }
}

function ImagePreview() {
    const imageInput = document.getElementById("imgfile")
    const preview = document.getElementById("imgPreview");

    preview.innerHTML = "";

    if (imageInput.files.length > 0) {
        const imageFile = imageInput.files[0];
        const imageElement = document.createElement("img");
        imageElement.src = URL.createObjectURL(imageFile);
        imageElement.classList.add("rounded-full", "w-32", "h-32", "object-fit");
        preview.appendChild(imageElement);
        preview.style.display = "flex";
    }
}