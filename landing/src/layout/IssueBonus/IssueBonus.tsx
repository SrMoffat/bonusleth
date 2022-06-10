import { useMemo } from 'react';
import { FiHash, FiPlus } from 'react-icons/fi';
import { MdAlternateEmail } from 'react-icons/md';
import IssueButton from './IssueButton';
import RedeemBonus from './RedeemBonus';
import './styles.scss';

const IssueBonus = () => {
  const balance = useMemo(() => 50, []);

  const handleAddAmount = () => {
    console.log('add');
  }

  const handleAddRecipient = () => {
    console.log('add');
  }

  const handleAddHashtag = () => {
    console.log('add');
  }

  return (
    <section id="bonus-give-area">
      <div className="section-wrapper">
        <div className="bonus-balance">You have <b>{balance} Zawadis</b> to give away</div>
        <div className="bonus-issue-container">
          <div className="bonus-issue-actions">
            <IssueButton label="Amount" icon={<FiPlus />} onClick={handleAddAmount} />
            <IssueButton label="Amount" icon={<MdAlternateEmail />} onClick={handleAddRecipient} />
            <IssueButton label="Amount" icon={<FiHash />} onClick={handleAddHashtag} />
          </div>
          <div className="bonus-issue-description">
            <textarea
              className="bonus-issue-description-textarea"
              placeholder='What do you want to give away?'
             />
          </div>
          <div className="bonus-issue-footer">
            <div className='placeholder'/>
            <IssueButton label="Give" onClick={handleAddHashtag} className='dark' />
          </div>
        </div>
        <RedeemBonus/>
      </div>
    </section>
  )
}

export default IssueBonus
