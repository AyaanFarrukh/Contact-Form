const form = document.getElementById("contact-form");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    if(!form.checkValidity()) {
    Swal.fire({
        icon: 'warning',
        title: 'Oops...',
        text: 'Please fill in all required fields!',
    });
    return;
}

    Swal.fire({
        icon: 'success',
        title: 'Submitted!',
        text: 'Your message has been sent successfully.',
        customClass: {
            title: "custom-title",
            text: "custom-text",
            popup: "popup"
        }
    });
    form.reset();
    return
});