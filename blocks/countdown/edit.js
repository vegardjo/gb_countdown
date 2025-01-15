import {
  useBlockProps,
  InspectorControls,
  RichText,
} from '@wordpress/block-editor';
import {
  useEffect,
  useState
} from "@wordpress/element";
import {
  TimePicker,
  PanelBody,
  ToggleControl,
} from '@wordpress/components';
import { t } from "drupal";

function Edit({ attributes, setAttributes }) {

  const border = attributes.border;

  const [timeUnits, setTimeUnits] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Calculate time difference when the editor is opened
  useEffect(() => {
    if (attributes.date) {
      const targetDate = new Date(attributes.date);
      const now = new Date();

      const timeDiff = targetDate - now;
      if (timeDiff > 0) {
        const seconds = Math.floor((timeDiff / 1000) % 60);
        const minutes = Math.floor((timeDiff / 1000 / 60) % 60);
        const hours = Math.floor((timeDiff / 1000 / 60 / 60) % 24);
        const days = Math.floor(timeDiff / 1000 / 60 / 60 / 24);

        setTimeUnits({ days, hours, minutes, seconds });
      } else {
        setTimeUnits({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }
  }, [attributes.date]);

  return (
    <div {...useBlockProps()}>
      <InspectorControls>
        <PanelBody>
          <TimePicker
            value={attributes.date || new Date()}
            onChange={(value) => setAttributes({ date: value })}
          />

          <ToggleControl
            label={ __('Show border') }
            checked={border}
            onChange={() => setAttributes({ border : !border })}
          />

        </PanelBody>
      </InspectorControls>

      <div className="countdown-container" data-border={border}>
        <div className="label">
          <RichText
            identifier="heading"
            placeholder="Heading"
            tagName="span"
            value={attributes.heading}
            onChange={(value) => setAttributes({ heading: value })}
          />
        </div>
        <div className="days">
          <div className="time-value">{timeUnits.days}</div>
          <div className="time-label">{t('Days')}</div>
        </div>
        <div className="hours">
          <div className="time-value">{timeUnits.hours}</div>
          <div className="time-label">{t('Hours')}</div>
        </div>
        <div className="mins">
          <div className="time-value">{timeUnits.minutes}</div>
          <div className="time-label">{t('Minutes')}</div>
        </div>
        <div className="secs">
          <div className="time-value">{timeUnits.seconds}</div>
          <div className="time-label">{t('Seconds')}</div>
        </div>
      </div>

    </div>
  );
}

export default Edit;
