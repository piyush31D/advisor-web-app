import styles from './plan.module.css';
import React from 'react';
import cx from 'classnames';
import { createStyles, withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import Select, { SelectProps } from '@material-ui/core/Select';
import { OutlinedInputProps } from '@material-ui/core/OutlinedInput';
import MenuItem from '@material-ui/core/MenuItem';
import Tag from 'src/components/tag/tag';
import TextButton from 'src/components/button/text.button'
import InputBase from '@material-ui/core/InputBase';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import { NavLink } from 'react-router-dom';

const StyledInput = withStyles(() =>
  createStyles({
    root: {
      'label + &': {
        marginTop: 0,
      },
    },
    input: {
      borderRadius: 5,
      position: 'relative',
      backgroundColor: 'var(--input-background)',
      border: 0,
      padding: '5px 10px',
      transition: '0.2s',
      width: 60,
      color: 'var(--text-primary)',
      '&:focus,&:hover': {
        borderRadius: 5,
        backgroundColor: 'var(--input-focused-background)',
      },
    },
  })
)(InputBase);

const PlanPreview: React.FC = () => {
  return (
    <div>
      <div className={styles.planPreviewHeader}>Plan Preview</div>
      <div className={styles.planCard}>
        <div className={styles.planHeader}>
          <Typography variant="h5">Intraday equity</Typography>
          <div className="margin-top flex-wrap  main-center">
            <Tag color="white" size="medium" title="Equity" />
          </div>
        </div>
        <div className="flex fill col-flex padding-top padding-bottom">
          <div className="flex padding-top padding-bottom cross-baseline">
            <span className="pficon-tick-circle margin-right--small opacity50" />
            <span className="flex fill font-medium semi-bold">
              Personalised intraday trading based on risk appetite
            </span>
          </div>
          <div className="flex padding-top padding-bottom cross-baseline">
            <span className="pficon-tick-circle margin-right--small opacity50" />
            <span className="flex fill font-medium semi-bold">
              Lorem ipsum dolor sit amet
            </span>
          </div>
          <div className="flex padding-top padding-bottom cross-baseline">
            <span className="pficon-tick-circle margin-right--small opacity50" />
            <span className="flex fill font-medium semi-bold">
              Lorem ipsum dolor sit amet
            </span>
          </div>
        </div>
        <div className={styles.planCardPricing}>
          <span>Weekly</span>
          <span>
            <span className="bold margin-right--small font-regular">₹1200</span>
              / Month
            </span>
        </div>
        <div className={styles.planCardPricing}>
          <span>Monthly</span>
          <span>
            <span className="bold margin-right--small font-regular">₹1000</span>
              / Month
            </span>
        </div>
      </div>
    </div>
  )
}
const PlanBackgroundColors = [
  'var(--accent)',
  '#b51659',
  '#99485a',
  '#302514',
  '#1d3d59',
  '#fe6f42',
  '#1769a4',
  '#1e2963',
  '#c7601a',
  '#4f0572',
  '#688b69'
]
const Plan: React.FC = () => {
  return (
    <>
      <div className="flex cross-start">
        <div className="flex fill col-flex margin-right padding-right">
          <div className="flex cross-center padding-right padding-left">
            <Breadcrumbs className="flex fill bolod" aria-label="breadcrumb">
              <NavLink className="text-secondary" color="inherit" to="/plan/121">
                Intraday Equity
              </NavLink>
              <Typography variant="h6">Edit</Typography>
            </Breadcrumbs>
            <TextButton type="text-primary" size="regular" title="Cancel" />
            <span className="spacer" />
            <TextButton type="fill-accent" size="regular" title="Save" />
          </div>
          <div className={styles.editPlanWrap}>
            <p className={styles.propertyHeadline}>Plan Title</p>
            <input aria-multiline={true} type="text" className={styles.inlineInput} style={{ fontSize: 'var(--font-large)', fontWeight: 600 }} />
            <p className={styles.propertyHeadline}>Offerings</p>
            <p className={styles.propertySubHeadline}>Investment products to be used on this plan</p>
            <div className={styles.propertyValueContainer}>
              <Chip
                label="Equity"
                onDelete={() => null}
              />
              <TextButton type="text-accent" size="regular" icon="plus" />
            </div>
            <p className={styles.propertyHeadline}>Background</p>
            <p className={styles.propertySubHeadline}>Choose a colour as background for the plan card. </p>
            <div className={styles.propertyValueContainer}>
              {PlanBackgroundColors.map((color, i) =>
                <button role="button" className={styles.colorBox} style={{ backgroundColor: color }}></button>
              )}
            </div>
            <div className={styles.propertyHeadline}>
              <span>Plan Features</span>
              <TextButton type="text-accent" size="medium" title="Add feature" icon="plus" />
            </div>
            <p className={styles.propertySubHeadline}>Specify the benefits and deliverables of the plan.</p>
            <div className={styles.benefitBox}>
              <input aria-multiline={true} type="text" className={cx(styles.inlineInput, styles.withDeleteButton)} />
              <div className={styles.deleteButton}>
                <TextButton type="text-primary" size="regular" icon="cross" />
              </div>
            </div>
            <div className={styles.benefitBox}>
              <input aria-multiline={true} type="text" className={cx(styles.inlineInput, styles.withDeleteButton)} />
              <div className={styles.deleteButton}>
                <TextButton type="text-primary" size="regular" icon="cross" />
              </div>
            </div>
            <div className={styles.propertyHeadline}>
              <span>Price and Billing</span>
              <TextButton type="text-accent" size="medium" title="Add" icon="plus" />
            </div>
            <div className={styles.pricingBox}>
              <div>
                <span className="margin-right semi-bold">Price</span>
                <StyledInput />
                <span className="spacer">/</span>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value='age'
                  variant="filled"
                  input={<StyledInput />}

                >
                  <MenuItem value={10}>Week</MenuItem>
                  <MenuItem value={20}>Fortnight</MenuItem>
                  <MenuItem value={30}>Month</MenuItem>
                  <MenuItem value={30}>Quarter</MenuItem>
                  <MenuItem value={30}>Year</MenuItem>
                </Select>
              </div>
              <div>
                <span className="margin-right semi-bold">When billed</span>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value='age'
                  variant="filled"
                  input={<StyledInput />}

                >
                  <MenuItem value={10}>Weekly</MenuItem>
                  <MenuItem value={20}>Fortnightly</MenuItem>
                  <MenuItem value={30}>Monthly</MenuItem>
                  <MenuItem value={30}>Quarterly</MenuItem>
                  <MenuItem value={30}>Yearly</MenuItem>
                </Select>
              </div>
              <div className={styles.deleteButton}>
                <TextButton type="text-primary" size="regular" icon="cross" />
              </div>
            </div>
          </div>
        </div>
        <PlanPreview />
      </div>
    </>
  );
};

export default Plan;
