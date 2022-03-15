<template>
<div>
  <h1>Create a Ticket</h1>
  <form v-if="creating" @submit.prevent="addTicket">
    <input v-model="name" placeholder="Name">
    <p></p>
    <textarea v-model="problem"></textarea>
    <br />
    <button type="submit">Submit</button>
  </form>
  <div v-else>
    <p>Thank you for submitting a ticket! We will respond shortly.</p>
    <p><a @click="toggleForm" href="#">Submit another ticket</a></p>
  </div>
</div>
</template>