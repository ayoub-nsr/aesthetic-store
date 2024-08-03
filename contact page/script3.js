function contact(event) {
  event.preventDefault(); 
  Swal.fire({
      title: "Thank you!",
      text: "You submitted successfully!",
      icon: "success",
      confirmButtonText: "OK"
  });
}