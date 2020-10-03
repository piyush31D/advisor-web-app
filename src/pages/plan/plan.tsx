import styles from './plan.module.css';
import React, { useState, MouseEvent } from 'react';
import cx from 'classnames';
import { createStyles, withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Tag from 'src/components/tag/tag';
import TextButton from 'src/components/button/text.button'
import InputBase from '@material-ui/core/InputBase';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import { NavLink } from 'react-router-dom';
import { FieldArray, Formik, FastField, FieldProps } from 'formik';
import Popover from '@material-ui/core/Popover';

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

interface PlanPriviewProps {
  backgroundColor: string;
}
const PlanPreview: React.FC<PlanPriviewProps> = ({ backgroundColor }) => {
  return (
    <div>
      <div className={styles.planPreviewHeader}>Plan Preview</div>
      <div className={styles.planCard} style={{ backgroundColor }}>
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

const PlanBackgroundColors = ['var(--accent)', '#b51659', '#99485a', '#302514', '#1d3d59', '#fe6f42', '#1769a4', '#1e2963', '#c7601a', '#4f0572', '#688b69']

const products = {
  items: [{
    name: 'Equity',
    selected: false
  }, {
    name: 'Futures',
    selected: false
  }, {
    name: 'Options',
    selected: false
  }],
  selectedCount: 0
}

const Plan: React.FC = () => {

  const [popoverState, setPopoverState] = useState<{ anchorEl: HTMLButtonElement | null, name: string | null }>({ anchorEl: null, name: null });
  const handlePopoverClick = (e: MouseEvent<HTMLButtonElement>, name: string) => {
    setPopoverState({ anchorEl: e.currentTarget, name });
  };
  const handlePopoverClose = () => {
    setPopoverState({ anchorEl: null, name: popoverState.name });
  };
  const popoverOpen = Boolean(popoverState.anchorEl);

  const [planBackground, setPlanBackground] = useState<string>('var(--accent)');

  const [productState, setProductState] = useState<{ items: { name: string, selected: boolean }[], selectedCount: number }>(products);
  const handleProductAdd = (i: number) => {
    let newArray = [...productState.items];
    newArray[i] = { name: productState.items[i].name, selected: true }
    setProductState({ items: newArray, selectedCount: productState.selectedCount + 1 });
    if (productState.selectedCount === productState.items.length - 1)
      return handlePopoverClose();
  }
  const handleProductRemove = (i: number) => {
    let newArray = [...productState.items];
    newArray[i] = { name: productState.items[i].name, selected: false }
    setProductState({ items: newArray, selectedCount: productState.selectedCount - 1 });
  }
  return (
    <>
      <Popover
        open={popoverOpen}
        anchorEl={popoverState.anchorEl}
        onClose={handlePopoverClose}
        elevation={8}
        anchorOrigin={{
          vertical: 'center',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'center',
          horizontal: 'left',
        }}
      >
        <div className={styles.popoverPaper}>
          {productState.items.map((item, i) => <>
            {!item.selected &&
              <button
                key={i}
                type="button"
                className={styles.menuItem}
                onClick={() => handleProductAdd(i)}
              >
                <span className="text-primary">{item.name}</span>
              </button>}
          </>
          )}
        </div>
      </Popover>
      <div className="flex cross-start">
        <div className="flex fill col-flex margin-right padding-right">
          <div className="flex cross-center padding-right padding-left">
            <Breadcrumbs className="flex fill bolod" aria-label="breadcrumb">
              <NavLink className="text-secondary" color="inherit" to="/plan/121">
                Intraday Equity
              </NavLink>
              <Typography variant="h6">Edit</Typography>
            </Breadcrumbs>
            <TextButton variant="text-primary" size="regular" title="Cancel" />
            <span className="spacer" />
            <TextButton variant="fill-accent" size="regular" title="Save" />
          </div>
          <div className={styles.editPlanWrap}>
            <Formik
              initialValues={{
                planName: '',
                features: [''],
                pricings: [{
                  price: '',
                  interval: 'week',
                  billing: 'weekly'
                }]
              }}
              onSubmit={values => alert(values)}
            >
              {({ values }) => (
                <form>
                  <p className={styles.propertyHeadline}>Plan Title</p>
                  <FastField
                    name="planName"
                    type="text"
                    className={cx(styles.inlineInput, 'font-semilarge bold')}
                  />
                  <p className={styles.propertyHeadline}>Offerings</p>
                  <p className={styles.propertySubHeadline}>Investment productState to be used on this plan</p>
                  <div className={styles.propertyValueContainer}>
                    {productState.items.map((item, i) =>
                      <>
                        {item.selected && <Chip
                          key={i}
                          label={item.name}
                          onDelete={() => handleProductRemove(i)}
                        />}
                      </>
                    )}
                    {productState.selectedCount < 3 && <TextButton type="button" onClick={(e) => handlePopoverClick(e, 'ADD_INSTRUMENT')} variant="text-accent" size="regular" icon="plus" />}
                  </div>
                  <p className={styles.propertyHeadline}>Background</p>
                  <p className={styles.propertySubHeadline}>Choose a colour as background for the plan card. </p>
                  <div className={styles.propertyValueContainer}>
                    {PlanBackgroundColors.map((color, i) =>
                      <button key={i} onClick={() => setPlanBackground(color)} type="button" className={styles.colorBox} style={{ backgroundColor: color }}>
                        {color === planBackground && <span className="pficon-check font-regular text-white" />}
                      </button>
                    )}
                  </div>

                  <FieldArray name="features">
                    {({ remove, unshift }) => (
                      <>
                        <div className={styles.propertyHeadline}>
                          <span>Plan Features</span>
                          <TextButton type="button" onClick={() => unshift('')} variant="text-accent" size="medium" title="Add feature" icon="plus" />
                        </div>
                        <p className={styles.propertySubHeadline}>Specify the benefits and deliverables of the plan.</p>
                        {values.features.length > 0 &&
                          values.features.map((feature, index) => (
                            <div key={index} className={styles.benefitBox}>
                              <FastField
                                name={`features[${index}]`}
                                type="text"
                                className={cx(styles.inlineInput, styles.withDeleteButton)}
                              />
                              <div className={styles.deleteButton}>
                                <TextButton type="button" onClick={() => remove(index)} variant="text-primary" size="regular" icon="cross" />
                              </div>
                            </div>
                          ))
                        }
                      </>
                    )}
                  </FieldArray>
                  <FieldArray name="pricings">
                    {({ remove, push }) => (
                      <>
                        <div className={styles.propertyHeadline}>
                          <span>Price</span>
                          <TextButton type="button" onClick={() => push({price:'',interval:'week',billing:'weekly'})} variant="text-accent" size="medium" title="Add" icon="plus" />
                        </div>
                        {values.pricings.length > 0 &&
                          values.pricings.map((pricing, index) => (
                            <div key={index} className={styles.pricingBox}>
                              <div>
                                <span className="margin-right semi-bold">Price</span>
                                <FastField name={`pricings[${index}].price`} as={StyledInput} />
                                <span className="spacer">/</span>
                                <FastField name={`pricings[${index}].interval`}>
                                  {({ field }: FieldProps) => (
                                    <Select
                                      {...field}
                                      variant="filled"
                                      input={<StyledInput />}
                                    >
                                      <MenuItem value="week">Week</MenuItem>
                                      <MenuItem value="fortnight">Fortnight</MenuItem>
                                      <MenuItem value="month">Month</MenuItem>
                                      <MenuItem value="quarter">Quarter</MenuItem>
                                      <MenuItem value="year">Year</MenuItem>
                                    </Select>
                                  )}
                                </FastField>
                              </div>
                              <div className={styles.deleteButton}>
                                <TextButton type="button" onClick={() => remove(index)} variant="text-primary" size="regular" icon="cross" />
                              </div>
                            </div>
                          ))
                        }
                      </>
                    )}
                  </FieldArray>
                </form>
              )}
            </Formik>
          </div>
        </div>
        <PlanPreview backgroundColor={planBackground} />
      </div>
    </>
  );
};

export default Plan;
