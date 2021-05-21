<template>
  <div class="container">
      <div class="section">
          <img src="../assets/login.png" alt="login">
      </div>
      <div class="section">
          <form >
              <h2>Let's Start</h2>
              <label for="email">
                  Email
                  <input v-model="email" type="email" name="email" id="email">
              </label>
              <label for="password">
                  Password
                  <input v-model="password" type="password" name="password" id="password">
                  </label>
                  <div class="buttons">
                     <span class="link">Wanna register?</span> <button>Log in</button>
                  </div>
          </form>
      </div>
  </div>
</template>

<script>
export default {
name:'Auth',
data(){
    return {
        email:'',
        password:''
    }
},


}

</script>

<style scoped>
img{
    width: 100%;
    height: auto;
}

form{
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
input{
    padding: 0.75rem 1rem;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
    outline: none;
    border: none;
    border: 0.5px solid gray;
}
label{
    display: flex;
    flex-direction: column;
}
h2{
    font-size: 2.7rem;
}
.link{
    text-decoration: underline;
    cursor: pointer;
}
.container{
    display: flex;
    width: 100vw;
    height: 100vh;
    max-width: 1280px;
    margin: 0 auto;
    flex-direction: column;
    padding: 1rem;
    box-sizing: border-box;
}
.buttons{
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-top: 1rem;
    
}
.buttons button{
    font-size: 1.3rem;
    padding: 0.5rem 2rem;
    cursor: pointer;
}
.section{
    display: flex;
}
@media screen and (min-width:1280px) {
    .container{
        flex-direction: row;
        padding: 3rem;
        
    }
    .section{
        flex-basis: 50%;
    }
    label{
        width: 60%;
        font-weight: 600;
        margin-top: 1rem;
    }
    input{
        padding: 1rem;
    }
    .buttons{
        width: 60%;
    }
}


</style>