const onClickAdd = () => {
  const inputText = document.getElementById('add-text').value;
  document.getElementById('add-text').value = '';

  addIncompleteList(inputText)
};

// 完了ボタンが押された時の処理
const completeTodo = (target) => {
  deleteFromIncompleteList(target)
    // 完了リストに追加
    const addTarget = target
    const text = addTarget.querySelector('.todo-name').innerText
    addTarget.textContent = null

    // タグの生成
    const div = document.createElement('div')
    div.className = 'list-row'

    const p = document.createElement('p')
    p.innerText = text
    p.className = 'todo-name'

    const backButton = document.createElement('button')
  backButton.innerText = '戻す'
  backButton.addEventListener('click', () => {
    const moveTarget = backButton.parentNode.parentNode
    moveIncompleteList(moveTarget)
  })

    div.appendChild(p)
    div.appendChild(backButton)
    addTarget.appendChild(div)

    document.getElementById('complete-list').appendChild(addTarget)
}

// 戻すボタンが押された時の処理
const moveIncompleteList = (target) => {
  document.getElementById('complete-list').removeChild(target)

  const moveTarget = target
  const text = moveTarget.querySelector('.todo-name').innerText

  // 未完了リストへ移動
  addIncompleteList(text)
}

// 未完了リストから指定の要素を削除
const deleteFromIncompleteList = (target) => {
  document.getElementById('incomplete-list').removeChild(target)
}

// 未完了リストにTODOを追加
const addIncompleteList = (text) => {
  // li tag
  const li = document.createElement('li')

  // div tag
  const div = document.createElement('div')
  div.className = 'list-row'

  // p tag
  const p = document.createElement('p')
  p.innerText = text
  p.className = 'todo-name'

  // button(complete)
  const completeButton = document.createElement('button')
  completeButton.innerText = '完了'
  completeButton.addEventListener('click', () => {
    // 押された完了ボタンの親タグ（li）を削除
    const completeTarget = completeButton.parentNode.parentNode
    completeTodo(completeTarget)
  })

  // button(delete)
  const deleteButton = document.createElement('button')
  deleteButton.innerText = '削除'
  deleteButton.addEventListener('click', () => {
    // 押された削除ボタンの親タグ（li）を削除
    const deleteTarget = deleteButton.parentNode.parentNode
    deleteFromIncompleteList(deleteTarget)
  })

  // liタグの子要素に、divタグを配置
  li.appendChild(div)
  // divタグの子要素に、表示する各要素を配置
  div.appendChild(p)
  div.appendChild(completeButton)
  div.appendChild(deleteButton)

  // 未完了のリストに追加
  document.getElementById('incomplete-list').appendChild(li)
}

document
  .getElementById('add-button')
  .addEventListener('click', () => onClickAdd());
