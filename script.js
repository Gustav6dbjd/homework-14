
 
async function fetchUser(userId) {
  try {
    let response = await fetch(`https:jsonplaceholder.typicode.com/users/${userId}`);
      
    if (!response.ok) {
      throw new Error(`Ошибка: ${response.status}`);
    }
      
    let user = await response.json();
    console.log(user); 
  } catch (error) {
    console.error(error);
  }
}
async function runFetch() {
  await fetchUser(1); 
}
  
  runFetch();
 

  

 
async function createUser(user) {
try {
  let response = await fetch('https://jsonplaceholder.typicode.com/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  });
  if (!response.ok) {
    throw new Error(`Ошибка: ${response.status}`);
  }
  
  const result = await response.json();
  console.log('Созданный пользователь', result);
 } catch (error) {
  console.error('Произошла ошибка', error);
}}

  


async function updateUser(id, updatedData) {
try {
  const response = await fetch(`https:jsonplaceholder.typicode.com/users/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(updatedData)
  });
  
     
  if (!response.ok) {
    throw new Error(`Ошибка: ${response.status}`);
  }
  let result = await response.json();
  console.log('Обновленный пользователь', result); 
} catch (error) {
  console.error('Произошла ошибка', error);
}
}
  
