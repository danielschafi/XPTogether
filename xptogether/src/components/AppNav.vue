<template>
    <nav>
      <ul>
        <li><a href="default.asp">Home</a></li>
        <li><a href="news.asp">News</a></li>
        <li><a href="contact.asp">Contact</a></li>
        <li><a href="about.asp">About</a></li>
      </ul>
    </nav>
</template>

<script>
export default {
  name: 'AppNav'
};
</script>

<style scoped>
nav {
    position: -webkit-sticky; 
    position: sticky;
    top: 0; 
  
}

nav ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: flex
}

nav ul li {
    flex-grow: 1; 
    text-align: center;
    
}

nav ul li a {
  
    font-family: Helvetica, sans-serif;
    display: block;
    color: #c4bbbc    ; 
    text-decoration: none;
    padding: 10px 20px;
    background-color: #3c4c44;
    
}

nav ul li a:hover {    
    display: block;
    color: #3c4c44; 
    text-decoration: none;
    padding: 10px 20px;
    background-color: #c4bbbc;
    
}

</style>
