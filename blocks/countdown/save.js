import { RichText, useBlockProps } from '@wordpress/block-editor';
import { t } from "drupal";

function Save({ attributes }) {
  const { heading, date, border } = attributes; // Array of image objects

  return (
    <div {...useBlockProps.save()}>

      <div className="countdown-container" data-date={date} data-border={border}>
        <div className="label">
          <RichText.Content tagName="span" value={heading}/>
        </div>
        <div className="days">
          <div className="time-value">0</div>
          <div className="time-label">Days</div>
        </div>
        <div className="hours">
          <div className="time-value">0</div>
          <div className="time-label">Hours</div>
        </div>
        <div className="mins">
          <div className="time-value">0</div>
          <div className="time-label">Minutes</div>
        </div>

        <div className="secs">
          <div className="time-value">0</div>
          <div className="time-label">Seconds</div>
        </div>
      </div>
    </div>
  );
}

export default Save;
