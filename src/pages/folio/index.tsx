import styles from './index.module.css';
import React from 'react';
import cx from 'classnames';
import FoliosPageRoute from 'src/routes/folio'; import NavColumn, { NavColumnLink, NavColumnCard } from 'src/components/navcolumn/nav-column';

const FoliosPage: React.FC = () => {
  const folioCount = 13;

  function createGroupData(_id: string, name: string) {
    return { _id, name, };
  }

  const Folios = [
    createGroupData('121', 'Random Folio Name'),
    createGroupData('122', 'Options high risk Low budget'),
    createGroupData('123', 'Goal home high budget'),
  ];
  return (
    <div className="flex fill row-flex cross-stretch">
      <NavColumn>
        <NavColumnLink linkTo="/folio/all" title="All Folios" badgeText={folioCount.toString()} />
        <NavColumnLink linkTo="/folio/new" title="New Folio" icon="plus" />
        <div className={styles.navTabBar}>
          <div className={cx(styles.navTab, styles.activeNavTab)}>
            Folios
        </div>
          <div className={styles.navTab}>
            Pinned
        </div>
        </div>
        {Folios.map((folio, i) => (
          <NavColumnCard
            linkTo={`/folio/${folio._id}`}
            key={i}
            name={folio.name}
            brief={
              <span>
                .
              </span>
            }
          />
        ))}
      </NavColumn>
      <div className={styles.container}>
        <FoliosPageRoute />
      </div>
    </div>
  );
};

export default FoliosPage;
