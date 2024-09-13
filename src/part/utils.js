import { Badge } from 'react-bootstrap'; // Import Badge
import CustomBadge from './customBadge'; 
import { format, differenceInDays } from 'date-fns';
// Function to truncate ID
export const truncateId = (id) => {
    if (id && id.length > 10) {
      return `${id.slice(0, 8)}...`; // Display first 8 characters and append "..."
    }
    return id;
  };
  
  // Function to return priority badge with color
  export const priorityBadge = (priority) => {
    switch (priority) {
      case 'Sangat Tinggi':
        return <Badge bg="danger">{priority}</Badge>; // Red
      case 'Tinggi':
        return <Badge bg="warning" text="dark">{priority}</Badge>; // Yellow
      case 'Sedang':
        return <Badge bg="success">{priority}</Badge>; // Green
      case 'Rendah':
        return <Badge bg="secondary">{priority}</Badge>; // Gray
      case 'Sangat Rendah':
        return <Badge bg="primary">{priority}</Badge>; // Blue
      default:
        return <Badge bg="light" text="dark">{priority || 'Unknown'}</Badge>; // Default
    }
  };
  
  export const statusBadge = (status) => {
    let badgeStyle = {};
  
    switch (status) {
      case 'Ready':
        badgeStyle = { backgroundColor: '#004d00', color: '#ffffff' }; // Dark Green
        break;
      case 'WIP':
        badgeStyle = { backgroundColor: '#ffd700', color: '#000000' }; // Yellow
        break;
      case 'Testing':
        badgeStyle = { backgroundColor: '#ff6600', color: '#ffffff' }; // Orange
        break;
      case 'Deploy':
        badgeStyle = { backgroundColor: '#00bfff', color: '#000000' }; // Light Blue
        break;
      case 'End':
        badgeStyle = { backgroundColor: '#66ff66', color: '#000000' }; // Light Green
        break;
      default:
        badgeStyle = { backgroundColor: '#f0f0f0', color: '#000000' }; // Light Gray
        break;
    }
  
    return <CustomBadge style={badgeStyle}>{status || 'Not Set'}</CustomBadge>;
  };


  export const sisaHari = (endDate)=>{
    // Function to calculate the remaining days
    const today = new Date();
    const end = new Date(endDate);
    return differenceInDays(end, today);

  // Example statusBadge component to display the remaining days
  }

  // Example statusBadge component to display the remaining days
  export const statusBadge2 = (sisaHari) => {
    if (sisaHari < 0) {
      return <Badge bg="danger">Expired</Badge>;
    }
    return <Badge bg="success">{sisaHari} days left</Badge>;
  };