<template>
<div class="content">
  <p><strong>以下のフォーム</strong>からお気軽にご連絡ください。</p><br><br>
    <form action="POST" data-netlify="true">
      <div class="fields">
        <div class="field half">
          <input type="text" name="name" id="name" placeholder="Name" />
        </div>
        <div class="field half">
          <input type="email" name="email" id="email" placeholder="Email" />
        </div>
        <div class="field">
          <textarea name="message" id="message" placeholder="Message" rows="7"></textarea>
        </div>
        <div>
          <input type="file" name="myfile" id="myfile" placeholder="Upload File" rows="7" />
        </div>
        <div>
          <div data-netlify-recaptcha="true"></div>
        </div>
      </div>
      <ul class="actions">
        <li><input type="submit" value="Send Message" class="button primary" /></li>
      </ul>
    </form>
</div>
</template>

<script>
export default {
  
}
</script>

<style>
/* @media screen and (max-width: 1152px)
#wrapper > section > .content > :last-child {
    margin-bottom: 0;
} */
form {
  margin: 0 150px;
}
.content > p {
  padding-left: 120px;
}
form > .fields {
    display: -moz-flex;
    display: -webkit-flex;
    display: -ms-flex;
    display: flex;
    -moz-flex-wrap: wrap;
    -webkit-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    margin: -2rem 0 2rem -2rem;
    width: calc(100% + 4rem);
}
form > .fields > .field {
    -moz-flex-grow: 0;
    -webkit-flex-grow: 0;
    -ms-flex-grow: 0;
    flex-grow: 0;
    -moz-flex-shrink: 0;
    -webkit-flex-shrink: 0;
    -ms-flex-shrink: 0;
    flex-shrink: 0;
    padding: 2rem 0 0 2rem;
    width: calc(100% - 2rem);
    border-radius: 0.325rem;
    border: solid 2px rgba(144, 144, 144, 0.25);
    color: inherit;
}
form > .fields > .field.half {
    width: calc(50% - 1rem);
}
ul.actions {
    display: -moz-flex;
    display: -webkit-flex;
    display: -ms-flex;
    display: flex;
    cursor: default;
    list-style: none;
    margin-left: -2rem;
    padding-left: 0;
}
form > :last-child {
    margin-bottom: 0;
}
ul {
    list-style: disc;
    margin: 0 0 2rem 0;
    padding-left: 1rem;
}
ol, ul {
    list-style: none;
}
</style>