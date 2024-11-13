function search() {
  var query = document.getElementById("search-input").value;

  if (query) {
    // Chuyển đến trang tìm kiếm (ví dụ: Google, hoặc hệ thống của bạn)
    window.location.href =
      "https://www.google.com/search?q=" + encodeURIComponent(query);
  } else {
    alert("Vui lòng nhập từ khóa tìm kiếm.");
  }
}
