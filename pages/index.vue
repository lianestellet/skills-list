<template>
  <div class="skills-create">
    <div class="skills-create__header">
      <h2>Skills do desenvolvedor</h2>
      <div class="header">
        <input
          @keyup.enter="handleAdd()"
          type="text"
          v-model="newSkill"
          class="header__input"
          placeholder="Nova skill.."
        />
        <span @click="handleAdd()" class="header__add-button">Incluir</span>
      </div>
    </div>
    <div class="skills-create__body">
      <div
        v-for="(skill, index) in skills"
        :key="index"
        :class="['skills-list', skill.checked ? 'checked' : '']"
      >
        <div class="skills-list__mark">
          <i v-if="skill.checked" class="el-icon-check"></i>
        </div>
        <div class="skills-list__name" @click="handleCheckSkill(skill)">{{ skill.name }}</div>
        <div class="skills-list__actions">
          <el-tooltip class="item" effect="dark" content="Remover item" placement="top-start">
            <i @click="handleRemove(skill)" class="el-icon-delete"></i>
          </el-tooltip>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import navbar from '@/layouts/partials/navbar.vue'
import { mapActions, mapGetters } from 'Vuex'

export default {
  components: {
    navbar,
  },
  data() {
    return {
      newSkill: '',
    }
  },
  computed: {
    ...mapGetters({
      skills: 'skills/list',
    }),
  },
  methods: {
    ...mapActions({
      addSkill: 'skills/add',
      removeSkill: 'skills/remove',
      checkSkill: 'skills/update',
    }),

    handleAdd() {
      if (this.isInvalidSkill(this.newSkill)) return this.invalidSkillError()

      const skill = { name: this.newSkill, checked: false, proficiency: 1 }
      this.addSkill(skill)
      this.newSkill = ''
    },

    handleRemove(skill) {
      this.removeSkill(skill)
    },

    handleCheckSkill(skill) {
      this.checkSkill({ ...skill, checked: !skill.checked })
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
  }

  &__body {
    & .skills-list {
      margin: 0;
      padding: 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 10px;
      background: #eee;
      font-size: 18px;
      transition: 0.2s;
      box-shadow: 0px 10px 15px #666;
      /*Making the list items unselectable    */
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;

      &:nth-child(odd) {
        background: #f9f9f9;
      }

      &:hover {
        background: #ddd;
      }

      &.checked {
        background: #65745b;
        color: #fff;
        text-decoration: line-through;
        border: 0.5px solid black;
      }

      & div {
        padding: 10px;
      }

      &__mark {
        min-width: 30px;
        width: 5%;
        color: #38dd55;
        padding: 20px;
      }

      &__name {
        width: 90%;
        cursor: pointer;
        padding: 20px;
      }

      &__actions {
        width: 5%;
        cursor: pointer;
        padding: 20px;
        text-align: center;
      }
    }
  }
}

h2 {
  font-size: 32px;
  font-weight: 700;
  margin: 20px 0;
}
</style>
