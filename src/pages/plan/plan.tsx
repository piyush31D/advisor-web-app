import styles from './plan.module.css';
import React, { useState, MouseEvent } from 'react';
import cx from 'classnames';
import { createStyles, withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputBase from '@material-ui/core/InputBase';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import { NavLink } from 'react-router-dom';
import { FieldArray, Formik, Form, FastField, FieldProps } from 'formik';
import Popover from '@material-ui/core/Popover';
import { createPlanThunk } from 'src/store/plan/thunk'
import { useDispatch, useSelector } from 'react-redux';
import Tag from 'src/components/tag/tag';
import TextButton from 'src/components/button/text.button'
import { IState } from 'src/store/config';
import SimpleBar from 'simplebar-react';

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
  planName: string;
  supportedProducts: string[];
  features: string[];
  pricings: {
    amount: number;
    percentage: number;
    planInterval: string
  }[];
}
const PlanPreview: React.FC<PlanPriviewProps> = (props) => {
  return (
    <div>
      <div className={styles.planPreviewHeader}>Plan Preview</div>
      <div className={styles.planCard} style={{ backgroundColor: props.backgroundColor }}>
        <div className={styles.planHeader}>
          <Typography variant="h6">{props.planName}</Typography>
          <div className="margin-top flex-wrap  main-center">
            {props.supportedProducts.map((product, i) =>
              <Tag key={i} color="white" size="medium" title={product} />
            )}
          </div>
        </div>
        <div className="flex fill col-flex padding-top padding-bottom">
          {props.features.map((feature, i) =>
            <div key={i} className="flex padding-top padding-bottom cross-baseline">
              <span className="pficon-tick-circle margin-right--small opacity50" />
              <span className="flex fill font-medium semi-bold">
                {feature}
              </span>
            </div>
          )}
        </div>
        {props.pricings.map((pricing, i) =>
          <div key={i} className={styles.planCardPricing}>
            <span className="bold margin-right--small font-regular">{`₹${pricing.amount}`}</span>
            <span className="font-medium">{`/ ${pricing.planInterval[0]}${pricing.planInterval.slice(1).toLowerCase()}`}</span>
          </div>
        )}
      </div>
    </div>
  )
}

const PlanBackgroundColors = ['var(--accent)', '#b51659', '#99485a', '#302514', '#1d3d59', '#fe6f42', '#1769a4', '#1e2963', '#c7601a', '#4f0572', '#688b69']

const Plan: React.FC = () => {
  const dispatch = useDispatch();
  const { profile } = useSelector((state: IState) => state.profileReducer);
  const advisorId = profile ? profile._id : 'test';

  const [popoverState, setPopoverState] = useState<{ anchorEl: HTMLButtonElement | null, name: string | null }>({ anchorEl: null, name: null });
  const handlePopoverClick = (e: MouseEvent<HTMLButtonElement>, name: string) => {
    setPopoverState({ anchorEl: e.currentTarget, name });
  };
  const handlePopoverClose = () => {
    setPopoverState({ anchorEl: null, name: popoverState.name });
  };
  const popoverOpen = Boolean(popoverState.anchorEl);

  const [planBackground, setPlanBackground] = useState<string>('var(--accent)');
  const [productState, setProductState] = useState<{ selected: string[], notSelected: string[], selectedCount: number }>({ selected: ['', '', ''], notSelected: ['Equity', 'Futures', 'Options'], selectedCount: 0 });

  const handleProductAdd = (productName: string, i: number) => {
    let newSelectedArray = [...productState.selected];
    newSelectedArray.splice(i, 1, productName);
    let newNotSelectedArray = [...productState.notSelected]
    newNotSelectedArray.splice(i, 1, '');
    if (productState.selectedCount >= productState.selected.length - 1)
      handlePopoverClose();
    setProductState({ selected: newSelectedArray, notSelected: newNotSelectedArray, selectedCount: productState.selectedCount + 1 });
  }
  const handleProductRemove = (productName: string, i: number) => {
    let newSelectedArray = [...productState.selected];
    newSelectedArray.splice(i, 1, '');
    let newNotSelectedArray = [...productState.notSelected]
    newNotSelectedArray.splice(i, 1, productName);
    setProductState({ selected: newSelectedArray, notSelected: newNotSelectedArray, selectedCount: productState.selectedCount - 1 })
  }

  const getSupportedProducts = productState.selected.filter(product => product.length > 0);

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
          {productState.notSelected.map((product, i) => <>
            {product.length > 0 &&
              <button
                key={i}
                type="button"
                className={styles.menuItem}
                onClick={() => handleProductAdd(product, i)}
              >
                <span className="text-primary">{product}</span>
              </button>}
          </>
          )}
        </div>
      </Popover>
      <>
        <Formik
          initialValues={{
            name: '',
            planType: 'fixed',
            minimumInvestment: 0,
            pricings: [{
              amount: 0,
              percentage: 0,
              planInterval: 'WEEK',
            }],
            features: ['test', 'testttt'],
          }}
          onSubmit={values => {
            console.log('submit clicked');

            dispatch(createPlanThunk({
              name: values.name,
              planType: 'fixed',
              minimumInvestment: 0,
              supportedProducts: getSupportedProducts,
              pricings: values.pricings,
              features: values.features,
              backgroundColor: planBackground
            }, advisorId))
          }}
        >
          {({ values }) => (
            <SimpleBar style={{ height: '100%', padding: '18px 20px 10px 20px' }}>
              <Form className="flex cross-start">
                <div className="flex fill col-flex margin-right padding-right">
                  <div className="flex cross-center padding-right padding-left">
                    <Breadcrumbs className="flex fill bolod" aria-label="breadcrumb">
                      <NavLink className="text-secondary" color="inherit" to="/plan/121">
                        Intraday Equity
                    </NavLink>
                      <Typography variant="h6">Edit</Typography>
                    </Breadcrumbs>
                    <TextButton type="button" variant="text-primary" size="regular" title="Cancel" />
                    <span className="spacer" />
                    <TextButton type="submit" variant="fill-accent" size="regular" title="Save" />
                  </div>
                  <div className={styles.editPlanWrap}>
                    <p className={styles.propertyHeadline}>Plan Name</p>
                    <FastField
                      name="name"
                      type="text"
                      className={cx(styles.inlineInput, 'font-semilarge semi-bold')}
                    />
                    <p className={styles.propertyHeadline}>Offerings</p>
                    <p className={styles.propertySubHeadline}>Investment productState to be used on this plan</p>
                    <div className={styles.propertyValueContainer}>
                      {productState.selected.map((product, i) =>
                        <>
                          {product.length > 0 && <Chip
                            key={i}
                            label={product}
                            onDelete={() => handleProductRemove(product, i)}
                          />}
                        </>
                      )}
                      {productState.selectedCount < productState.selected.length && <TextButton type="button" onClick={(e) => handlePopoverClick(e, 'ADD_INSTRUMENT')} variant="text-accent" size="regular" icon="plus" />}
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
                            <TextButton type="button" onClick={() => push({ amount: 0, percentage: 0, planInterval: 'WEEK' })} variant="text-accent" size="medium" title="Add" icon="plus" />
                          </div>
                          {values.pricings.length > 0 &&
                            values.pricings.map((pricing, index) => (
                              <div key={index} className={styles.pricingBox}>
                                <div>
                                  <span className="margin-right semi-bold">Price</span>
                                  <FastField type="number" name={`pricings[${index}].amount`} as={StyledInput} />
                                  <span className="spacer">/</span>
                                  <FastField name={`pricings[${index}].planInterval`}>
                                    {({ field }: FieldProps) => (
                                      <Select
                                        {...field}
                                        variant="filled"
                                        input={<StyledInput />}
                                      >
                                        <MenuItem value="WEEK">Week</MenuItem>
                                        <MenuItem value="FORTNIGHT">Fortnight</MenuItem>
                                        <MenuItem value="MONTH">Month</MenuItem>
                                        <MenuItem value="QUARTER">Quarter</MenuItem>
                                        <MenuItem value="YEAR">Year</MenuItem>
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
                  </div>
                </div>
                <PlanPreview planName={values.name} backgroundColor={planBackground} supportedProducts={getSupportedProducts} pricings={values.pricings} features={values.features} />
              </Form>
            </SimpleBar>
          )}
        </Formik>
      </>
    </>
  );
};

export default Plan;
