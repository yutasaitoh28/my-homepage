<template>
    <section class="resume-section p-3 p-lg-5 d-flex justify-content-center" id="experience">
      <section class="w-100">
        <h2 class="mb-5">Experience</h2>

        <div class="resume-item d-flex flex-column flex-md-row justify-content-between mb-5" v-for="(obj, key) in experienceJSON" :key="key">
          <div class="resume-content">
            <h3 class="mb-0">{{ obj.postion }}</h3>
            <div class="subheading mb-3">{{ obj.company }}</div>
            <p>{{ obj.description }}</p>
          </div>
          <div class="resume-date text-md-right">
            <span class="text-primary">{{ obj.term }}</span>
          </div>
        </div>

        <h2 class="mb-5">Education</h2>

        <div class="resume-item d-flex flex-column flex-md-row justify-content-between mb-5" v-for="(obj, key) in educationJSON" :key="key">
          <div class="resume-content">
            <h3 class="mb-0">{{ obj.school }}</h3>
            <div class="subheading mb-3">{{ obj.degree }}</div>
            <div>{{ obj.subject }}</div>
          </div>
          <div class="resume-date text-md-right">
            <span class="text-primary">{{ obj.term }}</span>
          </div>
        </div>
      </section>
    </section>
</template>

<script>
export default {
  data: () => ({
    experienceJSON: [
        {
          company: '株式会社イントラリンク',
          description: '欧米とアジアの企業を繋ぐためのコンサルティングを行う株式会社イントラリンクにて、最初の3ヶ月をイギリスで、後半の2ヶ月を東京で、プロジェクト・アシスタントとしてサポートしました。業務としては、欧州で最先端のテクノロジーを活用したビジネスを行うスタートアップのリサーチ、日本企業への営業のためのコンタクト先リサーチ、資料作成など、幅広く関わり、日本と欧州のビジネスの進め方の違いなどを学びました。',
          term: 'September 2019 - January 2020'
        }, 
        {
          company: 'Isomer Capital',
          description: 'ロンドンに拠点を置き、ヨーロッパ全域のVCを対象に投資を行う、ファンド・オブ・ファンズであるIsomer Capitalにて、リサーチ・アシスタントとして、日本のLP候補先である大手企業向けのリサーチと資料作成に携わり、欧州におけるスタートアップおよびベンチャーキャピタル業界のエコシステムへの知見を深めました。',
          term: 'September 2019 - November 2019'
        },
        {
          company: 'Streamhub',
          description: 'ロンドンに拠点を置く、プレミアム・メディア向けに特化したビッグデータを提供するStreamhub社にて、テスト・エンジニアとして、基本的なExcel・Google Analytics・SQLの知識を学び、データ・テストの業務を担いました。',
          term: 'March 2017 - May 2019'
        }
    ],
    educationJSON: [
      {
        school: 'ロンドン大学シティ校',
        degree: 'Bachelor of Science',
        subject: 'Economics BSc',
        term: 'September 2016 - July 2019'
      },
      {
        school: 'Life Christian Academy',
        degree: 'High School',
        subject: '',
        term: 'September 2012 - July 2013'
      }
    ]
  })
}
</script>

<style scoped>

</style>