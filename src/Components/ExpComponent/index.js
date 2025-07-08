import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent, {
  timelineOppositeContentClasses,
} from '@mui/lab/TimelineOppositeContent';
import './index.css'; // Custom Solo Leveling theme styles

const Exp = [
  {
    duration: '2023 - Present',
    role: 'Software Engineer',
    company: 'HCL Tech',
    description:
    "As a Frontend Developer, I was responsible for developing reusable and scalable UI components using modern JavaScript frameworks. I actively participated in debugging, testing, and deploying applications. I collaborated closely with cross-functional teams to implement client-facing features and enhance performance. My work involved writing clean, maintainable code, and improving user experience across platforms. I also strengthened my communication and client engagement skills by supporting requirement discussions and feedback sessions."
  },
  {
    duration: '2022 - 2023',
    role: 'Analyst',
    company: 'HCL Tech',
    description:"As a IT Analyst, I provided technical support for end-users by troubleshooting hardware and software issues, resolving system errors, and installing operating systems and enterprise applications. I contributed to infrastructure maintenance by ensuring network stability, monitoring systems, and supporting backup processes. Additionally, I was involved in user account management, including provisioning, access control, and deactivation, following security best practices. This role helped me gain a solid foundation in IT operations and support workflows."
  },
];

const Education = [
  {
    duration: '2022 - 2025',
    schoolName: 'Sastra Deemed University | Thanjavur,TamilNadu',
    branch:"BCA-Bachelors of Computer Application",
    percentage: '80%',
  },
  {
    duration: '2018 - 2020',
    schoolName: 'JVS Sri Chaithanya | Kothagudem, Telangana ',
    branch:"MPC-Mathc, Physics and Chemistry",
    percentage: '95%',
  },
  {
    duration: '2017 - 2018',
    schoolName: 'Pragathi Vidhyanikethan | Sarapaka, Telangana',
    branch:"",
    percentage: '87%',
  },
];

const Experience = ({scrollToTab}) => {
  const [value, setValue] = React.useState('Experience');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="experience-wrapper">
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="Experience Tabs"
        centered
        TabIndicatorProps={{ style: { backgroundColor: '#38bdf8' } }}
        textColor="inherit"
        sx={{
          '& .MuiTab-root': {
            color: '#ccc',
            fontWeight: 'bold',
            fontSize: '2rem',
          },
          '& .Mui-selected': {
            color: '#38bdf8',
          },
        }}
      >
        <Tab label="Experience" value="Experience"  />
        <Tab label="Education" value="Education" />
      </Tabs>

      <Timeline
        position="Vertical"
        sx={{
          [`& .${timelineOppositeContentClasses.root}`]: {
            flex: 0.2,
            color: '#888',
          },
        }}
      >
        {(value === 'Experience' ? Exp : Education).map((item, index, arr) => (
          <TimelineItem key={index}>
            <TimelineOppositeContent>
              <span className="duration">{item.duration}</span>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot
                sx={{
                  bgcolor: '#00ffff',
                  boxShadow: '0 0 8px #00ffff',
                }}
              />
              {index !== arr.length - 1 && (
                <TimelineConnector sx={{ bgcolor: '#00ffff' }} />
              )}
            </TimelineSeparator>
            <TimelineContent className="timeline-content">
              <div className="timeline-card">
                <h3>{value === 'Experience' ? item.company : item.schoolName}</h3>
                <p className="timeline-role">
                  {value === 'Experience' ? item.role : <>{item.branch} | {item.percentage}</>}
                </p>
                <p className='job-des'>{item.description}</p>
              </div>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </div>
  );
};

export default Experience;
