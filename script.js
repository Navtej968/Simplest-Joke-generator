async function getJoke(type) {
  const response =  await fetch("https://v2.jokeapi.dev/joke/" + type);
  const data =  await response.json();
  if (data.type === 'single') {
    return(data.joke);
  } else {
    return data.setup + "\n" + data.delivery;
  }
}

async function onSubmit()
{

  const getSelection = document.querySelector('input[name="type"]:checked');
  if(getSelection.value != null)
  {
  if(getSelection.value === 'programming')
  {
      let joke = await getJoke("Programming");
      id = document.getElementById('joke');
      id.innerHTML = joke;
  }
  else if(getSelection.value === 'dark')
  {
    let joke = await getJoke("Dark");
    id = document.getElementById('joke');
    id.innerHTML = joke;

  }
  else if(getSelection.value === 'pun')
  {
    let joke = await getJoke("pun");
    id = document.getElementById('joke');
    id.innerHTML = joke;

  }}
  else
  {
    id = documnet.getElementById('joke');
    id.innerHTML = "Please select a joke type";
  }
}