// returns the conditoinal styles for the Filter Bar
export const handleFilterBarStyle = (isMobile, hasFilters) => {
    const styles = {
      padding: "1em 1.5em",
      borderRadius: "2px",
      marginBottom: "20px",
      borderRadius: '5px'
    }
    if (isMobile) {
      styles.width = '300px';
    } else {
      styles.width = '1000px'
    }

    if (hasFilters) {
      styles.backgroundColor = 'white';
      styles.boxShadow = '5px 10px #EEF6F6';
    }
    return styles;
  };

// returns the conditoinal styles for a Job Listing
export const handleListingStyle = (isMobile, isFeatured) => {
    const styles = {
        backgroundColor: 'white',
        padding: '1em 1.5em',
        borderRadius: '2px',
        marginBottom: '20px',
        boxShadow: '5px 10px #EEF6F6',
        borderRadius: '5px'
    }
    if (isMobile) {
      styles.width = '300px';
      styles.height = '150px';
    } else {
      styles.width = '1000px';
      styles.height = '100px';
    }

    if (isFeatured) {
        styles.borderLeft = "5px solid #049A9A";
    }
    return styles;
  };