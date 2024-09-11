import React from 'react'
import building from '../assets/building1.png'

const Building = () => {
  return (
    <div>
        <ScrollContainer>
        <ScrollPage className="building-scroll">
          <Animator animation={animation1}>
            <div>
              <img src={building} alt="Building" className='building'/>
            </div>
          </Animator>
        </ScrollPage>
      </ScrollContainer>
    </div>
  )
}

export default Building