/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-no-target-blank */
import Image from 'next/image'
import React from 'react'
import TwitchLogo from '../../assets/TwitchLogo.svg'
import TwitterLogo from '../../assets/TwitterLogo.svg'
import InstagramLogo from '../../assets/InstagramLogo.svg'

const CardOne = () => {
  return (
    <>
      <section>
        <div>
          <h2>Meus jogos</h2>
          <p>Os games que eu mais curto jogar!</p>

          <ul className='games-list'>
            <li>
              <a 
                target="_blank"
                href="https://www.twitch.tv/directory/game/League%20of%20Legends"
              >
                <img src="https://static-cdn.jtvnw.net/ttv-boxart/21779-188x250.jpg" alt="League of legends" />
              </a>
            </li>

            <li>
              <a 
                target="_blank"
                href="https://www.twitch.tv/directory/game/VALORANT"
              >
                <img src="https://static-cdn.jtvnw.net/ttv-boxart/516575-188x250.jpg" alt="Valorant" />
              </a>
            </li>

            <li>
              <a 
                target="_blank"
                href="https://www.twitch.tv/directory/game/Counter-Strike%3A%20Global%20Offensive"
              >
                <img src="https://static-cdn.jtvnw.net/ttv-boxart/32399_IGDB-188x250.jpg" alt="CSGO" />
              </a>
            </li>
          </ul>
        </div>
      </section>
    </>
  )
}

const CardTwo = () => {
  return (
    <>
      <section>
        <div>
          <h2>Canais e streamers</h2>
          <p>Lista de canais e transmissões que não perco!</p>

          <ul className='channel-list'>
            <li>
              <a 
                target="_blank"
                href="https://www.twitch.tv/smzinho"
              >
                <img src="https://static-cdn.jtvnw.net/jtv_user_pictures/33aba100-11ff-4207-aff3-ef848ddbb7e8-profile_image-150x150.png" alt="League of legends" />
              </a>
            </li>

            <li>
              <a 
                target="_blank"
                href="https://www.twitch.tv/alanzoka"
              >
                <img src="https://static-cdn.jtvnw.net/jtv_user_pictures/15cec952-c1ba-4ff8-a79c-53c2fa5bd269-profile_image-150x150.png" alt="Valorant" />
              </a>
            </li>

            <li>
              <a 
                target="_blank"
                href="https://www.twitch.tv/loud_coringa"
              >
                <img src="https://static-cdn.jtvnw.net/jtv_user_pictures/c07acddc-1e1b-479f-97c4-09636f80e857-profile_image-150x150.png" alt="CSGO" />
              </a>
            </li>
          </ul>
        </div>
      </section>
    </>
  )
}

const CardThree = () => {
  return (
    <>
      <section>
        <div>
          <h2>Minhas redes</h2>
          <p>Se conecte comigo agora mesmo!</p>

          <ul>
            <li>
              <a 
                target="_blank"
                href="https://www.twitch.tv/israelalves182"
              >
                <Image src={TwitchLogo} alt="Twitch" />
              </a>
            </li>

            <li>
              <a 
                target="_blank"
                href="https://twitter.com/ysraelescence"
              >
                <Image src={TwitterLogo} alt="Twitter" />
              </a>
            </li>

            <li>
              <a 
                target="_blank"
                href="https://www.instagram.com/_israelalves/"
              >
                <Image src={InstagramLogo} alt="Instagram" />
              </a>
            </li>
          </ul>
        </div>
      </section>
    </>
  )
}

export {
  CardOne,
  CardTwo,
  CardThree
}
