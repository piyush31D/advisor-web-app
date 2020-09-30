import styles from './index.module.css';
import React from 'react';
import PlanPageRoute from 'src/routes/plan';
import NavColumn, { NavColumnLink, NavColumnCard } from 'src/components/navcolumn/nav-column';

const PlanPage: React.FC = () => {
  const folioCount = 10;

  function createGroupData(_id: string, name: string) {
    return { _id, name, };
  }

  const Plans = [
    createGroupData('121', 'Investment gold'),
    createGroupData('122', 'Intraday Options'),
    createGroupData('123', 'Intraday Equity'),
  ];
  return (
    <div className="flex fill row-flex cross-stretch">
      <NavColumn>
        <NavColumnLink linkTo="/plan/all" title="All Plans" badgeText={folioCount.toString()} />
        <NavColumnLink linkTo="/plan/new" title="New Plan" icon="plus" />
        <div className="margin-top margin-bottom"/>
        {Plans.map((plan, index) => (
          <NavColumnCard
            linkTo={`/plan/${plan._id}`}
            name={plan.name}
            brief={
              <span>
                .
              </span>
            }
          />
        ))}
      </NavColumn>
      <div className={styles.container}>
        <PlanPageRoute />
      </div>
    </div>
  );
};

export default PlanPage;
