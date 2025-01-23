function capitalizeFirstLetter(str) {
    if (!str) return '';
    return str[0].toUpperCase() + str.slice(1);
}

function truncateString(str, maxLength) {
    if (str.length <= maxLength) return str;
  
    let truncated = str.slice(0, maxLength).trimEnd();
    const lastSpace = truncated.lastIndexOf(' ');
  
    if (lastSpace > 0) {
      truncated = truncated.slice(0, lastSpace);
    }
  
    return truncated + '...';
}

function isSubstring(str1, str2) {
    return str1.includes(str2) || str2.includes(str1);
}