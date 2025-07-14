import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Birthday = () => {
  const [people, setPeople] = useState([]);

  const fetchPeople = async () => {
    try {
      const response = await axios.get("https://randomuser.me/api/?results=9");
      setPeople(response.data.results);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  useEffect(() => {
    fetchPeople();
  }, []);

  const clearAll = () => {
    setPeople([]); // Set the array to empty
  };

  // Inline styles
  const style = {
    container: {
      padding: '20px',
      fontFamily: 'Arial, sans-serif',
      backgroundColor: 'pink',
      borderRadius: '10px',
      width: '400px',
      margin: 'auto',
      marginTop: '50px',
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
    },
    title: {
      textAlign: 'center',
      color: '#333'
    },
    list: {
      listStyle: 'none',
      padding: 0
    },
    listitem: {
      backgroundColor: '#fff',
      padding: '10px',
      borderRadius: '5px',
      marginBottom: '10px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      textAlign: 'centre'
    },
    button: {
      marginTop: '20px',
      padding: '10px 20px',
      backgroundColor: '#e74c3c',
      color: '#fff',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      display: 'block',
      marginLeft: 'auto',
      marginRight: 'auto'
    },
    image: {
      width: '40px',
      height: '40px',
      borderRadius: '50%',
      marginBottom: '10px',
      objectFit: 'cover'
    }
  };

  return (
    <div style={style.container}>
      <h1 style={style.title}>List of People Birthday</h1>

      {people.length === 0 ? (
        <p>No birthdays to display</p>
      ) : (
        <ul style={style.list}>
          {people.map((person, index) => {
            const birthday = new Date(person.dob.date).toDateString();
            return (
              <li key={index} style={style.listitem}>
                <img 
                  src={person.picture.medium}
                  alt={`${person.name.first} ${person.name.last}`}
                  style={style.image}
                />
                <strong>
                  {person.name.first} {person.name.last}
                </strong>
                <br />
                Age: {person.dob.age}
                <br />
                DOB: {birthday}
              </li>
            );
          })}
        </ul>
      )}
      <button onClick={clearAll} style={style.button}>Clear All</button>
    </div>
  );
};

export default Birthday;
