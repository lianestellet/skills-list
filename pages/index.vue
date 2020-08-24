<template>
  <div class="skills-create">
    <div class="skills-create__header">
      <h2>Habilidades para adicionar</h2>
      <div class="header">
        <input type="text" v-model="newSkill" class="header__input" placeholder="Nova skill.." />
        <span @click="addSkill()" class="header__add-button">Incluir</span>
      </div>
    </div>
    <div class="skills-create__body">
      <div class="skills__body">
        <ul id="myUl">
          <li
            v-for="(skill, index) in skills"
            :key="index"
            :class="skill.checked? 'checked' : ''"
            @click="markToogle(skill)"
          >{{skill.name}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import navbar from '@/layouts/partials/navbar.vue'

export default {
  components: {
    navbar,
  },
  data() {
    return {
      newSkill: '',
      skills: [
        { name: 'C#', checked: false, proficiency: 1 },
        { name: 'NodeJs', checked: false, proficiency: 1 },
        { name: 'Vue', checked: true, proficiency: 1 },
        { name: 'Java', checked: false, proficiency: 1 },
        { name: 'Css', checked: false, proficiency: 1 },
      ],
    }
  },
  mounted() {
    this.date = this.getYear()
  },
  methods: {
    getYear() {
      let date = new Date().getFullYear()
      return date
    },
    addSkill() {
      if (this.isInvalidSkill(this.newSkill)) return this.invalidSkillError()

      this.skills.push({ name: this.newSkill, checked: false, proficiency: 1 })
      this.newSkill = ''
    },

    markToogle(skill) {
      skill.checked = !skill.checked
    },

    isInvalidSkill(name) {
      return !name || name.trim().length === 0
    },

    invalidSkillError() {
      alert('Skill inválido')
    },
  },
}
</script>

<style lang="scss" scoped>
.skills-create {
  width: 50%;
  height: 100px;
  position: absolute;
  left: 28%;
  margin-top: 10%;

  &__header {
    background-color: #c4c0ad;
    padding: 30px 40px;
    color: #5c4319;
    text-align: center;
    border-radius: 15px 15px 0 0;
    box-shadow: 0px 10px 15px #666;

    &:after {
      content: '';
      display: table;
      clear: both;
    }
  }

  & .header {
    display: flex;

    &__input {
      margin: 0;
      border: none;
      border-radius: 0;
      width: 75%;
      padding: 10px;
      font-size: 16px;
    }

    &__add-button {
      padding: 10px;
      width: 25%;
      background: #c7ab7b;
      color: #5c4319;
      float: left;
      text-align: center;
      font-size: 16px;
      cursor: pointer;
      transition: 0.3s;
      border-radius: 0;
    }
  }

  .skills__body {
    ul li {
      margin: 0;
      padding: 0;
      display: relative;
      cursor: pointer;
      padding: 12px 8px 12px 40px;
      background: #eee;
      font-size: 18px;
      transition: 0.2s;
      box-shadow: 0px 10px 15px #666;
      /*Making the list items unselectable    */
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
    }

    /*Make all odd list items different color  */
    ul li:nth-child(odd) {
      background: #f9f9f9;
    }

    /*Darken on hover  */
    ul li:hover {
      background: #ddd;
    }

    /*When clicked on, add background color and strike out  */
    ul li.checked {
      background: #65745b;
      color: #fff;
      text-decoration: line-through;
      border: 0.5px solid black;
    }

    ul li.checked::before {
      content: '';
      position: absolute;
      border-color: #fff;
      border-style: solid;
      border-width: 0 2px 2px 0;
      top: 10px;
      left: 16px;
      transform: rotate(45deg);
      height: 15px;
      width: 7px;
    }
  }
}

h2 {
  font-size: 32px;
  font-weight: 700;
  margin: 20px 0;
}
</style>
