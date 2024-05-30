 function changeContent(contentId) {
  // Hide all content sections
  var contentSections = document.querySelectorAll('.content > div');
  contentSections.forEach(function(section) {
    section.style.display = 'none';
  });
  
  // Show the selected content section
  var selectedContent = document.getElementById(contentId + 'Content');
  if (selectedContent) {
    selectedContent.style.display = 'block';
  }
}
