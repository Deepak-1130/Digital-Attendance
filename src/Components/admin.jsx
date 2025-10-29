// ...existing code...
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../StyleSheets/admin.css';

const AdminDashboard = () => {
  const navigate = useNavigate();

  // static sample data - replace with real data later if needed
  const students = [
    { id: 1, name: 'Aarav Kumar', year: 'First' },
    { id: 2, name: 'Bhavya R', year: 'Second' },
    { id: 3, name: 'Chitra S', year: 'Third' },
    { id: 4, name: 'Dev Patel', year: 'Final' },
    { id: 5, name: 'Esha N', year: 'First' },
    { id: 6, name: 'Farhan A', year: 'Second' },
    { id: 1, name: 'Aarav Kumar', year: 'First' },
    { id: 2, name: 'Bhavya R', year: 'Second' },
    { id: 3, name: 'Chitra S', year: 'Third' },
    { id: 1, name: 'Aarav Kumar', year: 'First' },
    { id: 2, name: 'Bhavya R', year: 'Second' },
    { id: 3, name: 'Chitra S', year: 'Third' },
    { id: 4, name: 'Dev Patel', year: 'Final' },
    { id: 5, name: 'Esha N', year: 'First' },
    { id: 6, name: 'Farhan A', year: 'Second' },
    { id: 4, name: 'Dev Patel', year: 'Final' },
    { id: 5, name: 'Esha N', year: 'First' },
    { id: 6, name: 'Farhan A', year: 'Second' },
    { id: 1, name: 'Aarav Kumar', year: 'First' },
    { id: 2, name: 'Bhavya R', year: 'Second' },
    { id: 3, name: 'Chitra S', year: 'Third' },
    { id: 4, name: 'Dev Patel', year: 'Final' },
    { id: 5, name: 'Esha N', year: 'First' },
    { id: 6, name: 'Farhan A', year: 'Second' },
    { id: 1, name: 'Aarav Kumar', year: 'First' },
    { id: 2, name: 'Bhavya R', year: 'Second' },
    { id: 3, name: 'Chitra S', year: 'Third' },
    { id: 4, name: 'Dev Patel', year: 'Final' },
    { id: 5, name: 'Esha N', year: 'First' },
    { id: 6, name: 'Farhan A', year: 'Second' },
    { id: 1, name: 'Aarav Kumar', year: 'First' },
    { id: 2, name: 'Bhavya R', year: 'Second' },
    { id: 3, name: 'Chitra S', year: 'Third' },
    { id: 4, name: 'Dev Patel', year: 'Final' },
    { id: 5, name: 'Esha N', year: 'First' },
    { id: 6, name: 'Farhan A', year: 'Second' },
    { id: 3, name: 'Chitra S', year: 'Third' },
    { id: 4, name: 'Dev Patel', year: 'Final' },
    { id: 3, name: 'Chitra S', year: 'Third' },
    { id: 4, name: 'Dev Patel', year: 'Final' },
    { id: 3, name: 'Chitra S', year: 'Third' },
    { id: 4, name: 'Dev Patel', year: 'Final' },
     { id: 1, name: 'Aarav Kumar', year: 'First' },
    { id: 2, name: 'Bhavya R', year: 'Second' },
    { id: 3, name: 'Chitra S', year: 'Third' },
    { id: 4, name: 'Dev Patel', year: 'Final' },
    { id: 5, name: 'Esha N', year: 'First' },
    { id: 6, name: 'Farhan A', year: 'Second' },
     { id: 1, name: 'Aarav Kumar', year: 'First' },
    { id: 2, name: 'Bhavya R', year: 'Second' },
    { id: 3, name: 'Chitra S', year: 'Third' },
    { id: 4, name: 'Dev Patel', year: 'Final' },
    { id: 5, name: 'Esha N', year: 'First' },
    { id: 6, name: 'Farhan A', year: 'Second' },
    { id: 3, name: 'Chitra S', year: 'Third' },
    { id: 4, name: 'Dev Patel', year: 'Final' },
    { id: 3, name: 'Chitra S', year: 'Third' },
    { id: 4, name: 'Dev Patel', year: 'Final' },
    { id: 3, name: 'Chitra S', year: 'Third' },
    { id: 4, name: 'Dev Patel', year: 'Final' },
    { id: 3, name: 'Chitra S', year: 'Third' },
    { id: 4, name: 'Dev Patel', year: 'Final' },
    { id: 3, name: 'Chitra S', year: 'Third' },
    { id: 4, name: 'Dev Patel', year: 'Final' },
    { id: 1, name: 'Aarav Kumar', year: 'First' },
    { id: 2, name: 'Bhavya R', year: 'Second' },
    { id: 3, name: 'Chitra S', year: 'Third' },
    { id: 4, name: 'Dev Patel', year: 'Final' },
    { id: 5, name: 'Esha N', year: 'First' },
    { id: 6, name: 'Farhan A', year: 'Second' },
    { id: 1, name: 'Aarav Kumar', year: 'First' },
    { id: 2, name: 'Bhavya R', year: 'Second' },
    { id: 3, name: 'Chitra S', year: 'Third' },
    { id: 4, name: 'Dev Patel', year: 'Final' },
    { id: 5, name: 'Esha N', year: 'First' },
    { id: 6, name: 'Farhan A', year: 'Second' },
    { id: 1, name: 'Aarav Kumar', year: 'First' },
    { id: 2, name: 'Bhavya R', year: 'Second' },
    { id: 3, name: 'Chitra S', year: 'Third' },
    { id: 4, name: 'Dev Patel', year: 'Final' },
    { id: 5, name: 'Esha N', year: 'First' },
    { id: 6, name: 'Farhan A', year: 'Second' },
    { id: 1, name: 'Aarav Kumar', year: 'First' },
    { id: 2, name: 'Bhavya R', year: 'Second' },
    { id: 3, name: 'Chitra S', year: 'Third' },
    { id: 4, name: 'Dev Patel', year: 'Final' },
    { id: 5, name: 'Esha N', year: 'First' },
    { id: 6, name: 'Farhan A', year: 'Second' },
    
  ];

  const staff = [
    { id: 1, name: 'Prof. Ramesh', designation: 'Professor', subjects: ['22CSC33', '22CSC54'] },
    { id: 2, name: 'Dr. Sneha', designation: 'Assistant Professor', subjects: ['22CSC41', '22CSC53'] },
    { id: 3, name: 'Mr. Kiran', designation: 'Lecturer', subjects: ['22CSC31', '22CSC52'] },
        { id: 4, name: 'Mr. Ram', designation: 'Lecturer', subjects: ['22CSC34', '22CSC55'] },
  ];

  const yearCounts = students.reduce((acc, s) => {
    acc[s.year] = (acc[s.year] || 0) + 1;
    return acc;
  }, {});

  // navigate to attendance page for selected year
  const goToAttendance = (year) => {
    // navigate with query param; adjust route if your attendance component expects different params
    navigate(`/markAttendance?year=${encodeURIComponent(year)}`);
  };

  return (
    <div className="admin-dashboard">
      <header className="admin-header">
        <h1>Admin Dashboard</h1>
      </header>

      <div className="dashboard-sections">
        <section className="card">
          <div className="card-title">
            <h2>Overview</h2>
            <span className="count-badge">{students.length + staff.length}</span>
          </div>

          <div className="stats-grid">
            <div className="stat">
              <div className="stat-label">Total Students</div>
              <div className="stat-value">{students.length}</div>
            </div>
            <div className="stat">
              <div className="stat-label">Total Staff</div>
              <div className="stat-value">{staff.length}</div>
            </div>
          </div>

          <div className="divider" />

          <div className="year-counts">
            <h3 className="subheading">Students</h3>
            <ul className="year-list">
              <li className="year-row">
                <span>First Year</span>
                <div>
                  <strong className="year-count">{yearCounts['First'] || 0}</strong>
                  <button
                    className="year-button"
                    onClick={() => goToAttendance('First')}
                    aria-label="Go to First year attendance"
                  >
                    click
                  </button>
                </div>
              </li>

              <li className="year-row">
                <span>Second Year</span>
                <div>
                  <strong className="year-count">{yearCounts['Second'] || 0}</strong>
                  <button
                    className="year-button"
                    onClick={() => goToAttendance('Second')}
                    aria-label="Go to Second year attendance"
                  >
                    click
                  </button>
                </div>
              </li>

              <li className="year-row">
                <span>Third Year</span>
                <div>
                  <strong className="year-count">{yearCounts['Third'] || 0}</strong>
                  <button
                    className="year-button"
                    onClick={() => goToAttendance('Third')}
                    aria-label="Go to Third year attendance"
                  >
                    click
                  </button>
                </div>
              </li>

              <li className="year-row">
                <span>Final Year</span>
                <div>
                  <strong className="year-count">{yearCounts['Final'] || 0}</strong>
                  <button
                    className="year-button"
                    onClick={() => goToAttendance('Final')}
                    aria-label="Go to Final year attendance"
                  >
                    click
                  </button>
                </div>
              </li>
            </ul>
          </div>
        </section>

        <section className="card">
          <div className="card-title">
            <h2>Staff Details</h2>
            <span className="count-badge">{staff.length}</span>
          </div>

          <ul className="user-list">
            {staff.map(member => (
              <li key={member.id} className="user-item">
                <span className="avatar">
                  {member.name
                    ? member.name.split(' ').map(n => n[0]).slice(0,2).join('').toUpperCase()
                    : '?'}
                </span>

                <div className="user-info">
                  <div className="user-name">{member.name}</div>
                  <div className="user-email">{member.designation}</div>
                  <div className="subjects">
                    <small>Subjects: {member.subjects.join(', ')}</small>
                  </div>
                </div>
              </li>
            ))}
          </ul>

          <div className="divider" />
          {/* removed staff-by-designation section as requested */}
        </section>
      </div>
    </div>
  );
};

export default AdminDashboard;
// ...existing code...