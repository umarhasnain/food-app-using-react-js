import React from 'react'
import Button from '../Botton/Button'
import style from './style.module.css'

const Header = () => {
    let list = [
        {
            cartTittle:"Resturants",
        },
        {
            cartTittle:"Recipes",
        },
        {
            cartTittle:"About",
        },
        {
            cartTittle:"Pages",
        }
    ]
  return (
    <div className={style.mainDiv}>
      <div className={style.imgDiv}>
        <img src="/assets/imgs/logo.png" alt="" />
      </div>
      <div className={style.listDiv}>
        <ul>
        {
            list.map((item, i)=> {
                console.log(item.cartTittle,i);
                const {cartTittle} = item
                
                return (
                    <li key={i}>{cartTittle}</li>
                )
            })
        }

        </ul>
      </div>

      <div className={style.btn}>
        <Button isCard={true} data="Login" />
        <Button isCard={true} data="Sign Up" />
      </div>
    </div>
  )
}

export default Header
