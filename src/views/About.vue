<template>
<div>
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary" id="sideNav">
    <a class="navbar-brand js-scroll-trigger" href="#page-top">
      <span class="d-block d-lg-none">Yuta Saitoh</span>
      <span class="d-none d-lg-block">
        <img class="img-fluid img-profile rounded-circle mx-auto mb-2" src="@/assets/profile.jpg" alt="" vertical>
      </span>
    </a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
  </nav>

  <div class="container-fluid p-0">

    <section class="resume-section p-3 p-lg-5 d-flex align-items-center" id="home">
      <div class="w-100">
        <h1 class="mb-0">Yuta
          <span class="text-primary">Saitoh</span>
        </h1>
        <div class="subheading mb-5">
          <a href="mailto:yutasaitoh28@gmail.com">yutasaitoh28@.gmail.com</a>
        </div>
        <p class="lead mb-5">現在フロントエンジニアを目指して、vue.jsの学習をしております。エンジニアを目指すきっかけとなったのは、これまで最先端技術やそれらを組み合わせたイノベーションに興味を持ってきたものの、技術の中身については何も知らなかったことから、自分自身で開発ができる程度の技術力を身に付け、いずれはビジネスとテクノロジーの両方が理解できる人間になりたいと思ったからです。</p>

        <h4>スキルセット：</h4>
        <p>
          HTML/CSS、Javascript、Ruby/Rails、Vue.js：どれもビギナーレベルです。<br>
          英語：ビジネスレベル
        </p>
        <br>
        <br>
        <div class="social-icons">
          <a href="https://www.linkedin.com/in/yuta-saitoh-09a76393/" target="_blank">
            <font-awesome-icon :icon="['fab', 'linkedin']" />
          </a>
          <a href="https://github.com/yutasaitoh28" target="_blank">
            <font-awesome-icon :icon="['fab', 'github']" />
          </a>
          <a href="https://twitter.com/yutasaitoh28" target="_blank">
            <font-awesome-icon :icon="['fab', 'twitter']" />
          </a>
          <a href="https://www.facebook.com/yuta.saitoh.16" target="_blank">
            <font-awesome-icon :icon="['fab', 'facebook']" />
          </a>
        </div>
      </div>
    </section>
  </div>
</div>
</template>

<script>
export default {

}
</script>

<style lang="css">

</style>