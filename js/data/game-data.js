export const playerData = {
  level: 0,
  mistakes: 0,
  time: 300,
  answers: []
};
export const results = {
  win: {
    h2: `Вы настоящий меломан!`,
    comparison: `Вы заняли 2 место из 10. Это&nbsp;лучше чем у&nbsp;80%&nbsp;игроков`,
    replay: `Сыграть`
  },
  timeIsUp: {
    h2: `Увы и ах!`,
    description: `Время вышло!<br>Вы не успели отгадать все мелодии`,
    replay: `Попробовать`
  },
  fail: {
    h2: `Какая жалость!`,
    description: `У вас закончились все попытки.<br>Ничего, повезёт в следующий раз!`,
    replay: `Попробовать`
  }
};
export const levels = [
  {
    src: `https://www.youtube.com/audiolibrary_download?vid=91624fdc22fc54ed`,
    correct: `Kevin MacLeod`,
    answers: [
      {
        artist: `Kevin MacLeod`,
        image: `https://yt3.ggpht.com/-fkDeGauT7Co/AAAAAAAAAAI/AAAAAAAAAAA/dkF5ZKkrxRo/s900-c-k-no-mo-rj-c0xffffff/photo.jpg`,
      },
      {
        artist: `Jingle Punks`,
        image: `https://i.vimeocdn.com/portrait/992615_300x300`,
      },
      {
        artist: `Audionautix`,
        image: `http://4.bp.blogspot.com/-kft9qu5ET6U/VPFUBi9W-MI/AAAAAAAACYM/UxXilXKYwOc/s1600/audionautix%2BHalf%2BSize.jpg`,
      }
    ]
  },
  {
    src: `https://www.youtube.com/audiolibrary_download?vid=dc3b4dc549becd6b`,
    correct: `Jingle Punks`,
    answers: [
      {
        artist: `Kevin MacLeod`,
        image: `https://yt3.ggpht.com/-fkDeGauT7Co/AAAAAAAAAAI/AAAAAAAAAAA/dkF5ZKkrxRo/s900-c-k-no-mo-rj-c0xffffff/photo.jpg`,
      },
      {
        artist: `Jingle Punks`,
        image: `https://i.vimeocdn.com/portrait/992615_300x300`,
      },
      {
        artist: `Riot`,
        image: `https://i.ytimg.com/vi/jzgM3m8Vp1k/maxresdefault.jpg`,
      }
    ]
  },
  {
    src: `https://www.youtube.com/audiolibrary_download?vid=91624fdc22fc54ed`,
    correct: `Audionautix`,
    answers: [
      {
        artist: `Kevin MacLeod`,
        image: `https://yt3.ggpht.com/-fkDeGauT7Co/AAAAAAAAAAI/AAAAAAAAAAA/dkF5ZKkrxRo/s900-c-k-no-mo-rj-c0xffffff/photo.jpg`,
      },
      {
        artist: `Jingle Punks`,
        image: `https://i.vimeocdn.com/portrait/992615_300x300`,
      },
      {
        artist: `Audionautix`,
        image: `http://4.bp.blogspot.com/-kft9qu5ET6U/VPFUBi9W-MI/AAAAAAAACYM/UxXilXKYwOc/s1600/audionautix%2BHalf%2BSize.jpg`,
      }
    ]
  },
  {
    src: `https://www.youtube.com/audiolibrary_download?vid=91624fdc22fc54ed`,
    correct: `Gunnar Olsen`,
    answers: [
      {
        artist: `Kevin MacLeod`,
        image: `https://yt3.ggpht.com/-fkDeGauT7Co/AAAAAAAAAAI/AAAAAAAAAAA/dkF5ZKkrxRo/s900-c-k-no-mo-rj-c0xffffff/photo.jpg`,
      },
      {
        artist: `Jingle Punks`,
        image: `https://i.vimeocdn.com/portrait/992615_300x300`,
      },
      {
        artist: `Gunnar Olsen`,
        image: `https://f4.bcbits.com/img/0004181452_10.jpg`
      }
    ]
  },
  {
    src: `https://www.youtube.com/audiolibrary_download?vid=91624fdc22fc54ed`,
    correct: `Audionautix`,
    answers: [
      {
        artist: `Kevin MacLeod`,
        image: `https://i.vimeocdn.com/portrait/992615_300x300`,
      },
      {
        artist: `Gunnar Olsen`,
        image: `https://f4.bcbits.com/img/0004181452_10.jpg`,
      },
      {
        artist: `Audionautix`,
        image: `http://4.bp.blogspot.com/-kft9qu5ET6U/VPFUBi9W-MI/AAAAAAAACYM/UxXilXKYwOc/s1600/audionautix%2BHalf%2BSize.jpg`,
      }
    ]
  },
  {
    genre: `инди-рок`,
    answers: [{
      src: `https://www.youtube.com/audiolibrary_download?vid=bcbe5be936a32fb1`,
      isCorrect: false
    },
    {
      src: `https://www.youtube.com/audiolibrary_download?vid=dfb828f40096184c`,
      isCorrect: true
    },
    {
      src: `https://www.youtube.com/audiolibrary_download?vid=dc3b4dc549becd6b`,
      isCorrect: false
    },
    {
      src: `https://www.youtube.com/audiolibrary_download?vid=a127d9b7de8a17cf`,
      isCorrect: true
    }
    ]
  },
  {
    genre: `рок`,
    answers: [{
      src: `https://www.youtube.com/audiolibrary_download?vid=bcbe5be936a32fb1`,
      isCorrect: false
    },
    {
      src: `https://www.youtube.com/audiolibrary_download?vid=dfb828f40096184c`,
      isCorrect: true
    },
    {
      src: `https://www.youtube.com/audiolibrary_download?vid=dc3b4dc549becd6b`,
      isCorrect: false
    },
    {
      src: `https://www.youtube.com/audiolibrary_download?vid=a127d9b7de8a17cf`,
      isCorrect: false
    }
    ]
  },
  {
    genre: `панк`,
    answers: [{
      src: `https://www.youtube.com/audiolibrary_download?vid=bcbe5be936a32fb1`,
      isCorrect: true
    },
    {
      src: `https://www.youtube.com/audiolibrary_download?vid=dfb828f40096184c`,
      isCorrect: true
    },
    {
      src: `https://www.youtube.com/audiolibrary_download?vid=dc3b4dc549becd6b`,
      isCorrect: false
    },
    {
      src: `https://www.youtube.com/audiolibrary_download?vid=a127d9b7de8a17cf`,
      isCorrect: false
    }
    ]
  },
  {
    genre: `металл`,
    answers: [{
      src: `https://www.youtube.com/audiolibrary_download?vid=bcbe5be936a32fb1`,
      isCorrect: false
    },
    {
      src: `https://www.youtube.com/audiolibrary_download?vid=dfb828f40096184c`,
      isCorrect: true
    },
    {
      src: `https://www.youtube.com/audiolibrary_download?vid=dc3b4dc549becd6b`,
      isCorrect: false
    },
    {
      src: `https://www.youtube.com/audiolibrary_download?vid=a127d9b7de8a17cf`,
      isCorrect: false
    }
    ]
  },
  {
    genre: `классические`,
    answers: [{
      src: `https://www.youtube.com/audiolibrary_download?vid=bcbe5be936a32fb1`,
      isCorrect: true
    },
    {
      src: `https://www.youtube.com/audiolibrary_download?vid=dfb828f40096184c`,
      isCorrect: true
    },
    {
      src: `https://www.youtube.com/audiolibrary_download?vid=dc3b4dc549becd6b`,
      isCorrect: false
    },
    {
      src: `https://www.youtube.com/audiolibrary_download?vid=a127d9b7de8a17cf`,
      isCorrect: false
    }
    ]
  }
];
