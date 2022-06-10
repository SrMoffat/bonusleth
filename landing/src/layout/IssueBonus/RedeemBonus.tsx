import { useMemo } from 'react'
import IssueButton from './IssueButton'

const RedeemBonus = () => {
  const handlePickReward = () => {
    console.log('pick reward')
  }
  const balance = useMemo(() => 12, []);
  return (
    <div className='redeem-bonus-container'>
      <p className='caption'>You have <b>{balance} Zawadis</b> to redeem</p>
      <IssueButton label='Pick a Reward' onClick={handlePickReward} />
      <a className="gift-link" href="/">or give a gift <span className="emoji">🎁</span></a>
    </div>
  )
}

export default RedeemBonus
