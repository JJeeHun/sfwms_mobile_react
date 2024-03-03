import React from 'react'
import css from './OrderScan.module.css'
import SearchInput from '../../components/SearchInput'
import Input from '../../components/Input'
import Grid from '../../components/Grid';

const width = 70;

const OrderScan = () => {
  const config = [
    {text:'item',column:'sku'},
    {text:'Item Name',column:'skunm' ,style: {flexBasis: '5rem', height: '3rem'} ,bodyStyle: {textAlign: 'left'}},
    {text:'Qty',column:'qty'},
    {text:'Scan',column:'scanqty'},
    {text:'STAT',column:'stat'},
  ];

  const data = [
    {sku: 'item1',skunm: 'item Name1', qty:10, scanqty:20, stat: 10},
    {sku: 'item2',skunm: 'item Name2', qty:10, scanqty:20, stat: 10},
    {sku: 'item2',skunm: 'item Name2', qty:10, scanqty:20, stat: 10},
    {sku: 'item2',skunm: 'item Name2', qty:10, scanqty:20, stat: 10},
    {sku: 'item2',skunm: 'item Name2', qty:10, scanqty:20, stat: 10},
    {sku: 'item2',skunm: 'item Name2', qty:10, scanqty:20, stat: 10},
    {sku: 'item2',skunm: 'item Name2', qty:10, scanqty:20, stat: 10},
    {sku: 'item2',skunm: 'item Name2', qty:10, scanqty:20, stat: 10},
    {sku: 'item2',skunm: 'item Name2', qty:10, scanqty:20, stat: 10},
    {sku: 'item2',skunm: 'item Name2', qty:10, scanqty:20, stat: 10},
    {sku: 'item2',skunm: 'item Name2', qty:10, scanqty:20, stat: 10},
    {sku: 'item2',skunm: 'item Name2', qty:10, scanqty:20, stat: 10},
    {sku: 'item2',skunm: 'item Name2', qty:10, scanqty:20, stat: 10},
    {sku: 'item2',skunm: 'item Name2', qty:10, scanqty:20, stat: 10},
    {sku: 'item2',skunm: 'item Name2', qty:10, scanqty:20, stat: 10},
    {sku: 'item2',skunm: 'item Name2', qty:10, scanqty:20, stat: 10},
    {sku: 'item2',skunm: 'item Name2', qty:10, scanqty:20, stat: 10},
    {sku: 'item2',skunm: 'item Name2', qty:10, scanqty:20, stat: 10},
    {sku: 'item2',skunm: 'item Name2', qty:10, scanqty:20, stat: 10},
    {sku: 'item2',skunm: 'item Name2', qty:10, scanqty:20, stat: 10},
    {sku: 'item2',skunm: 'item Name2', qty:10, scanqty:20, stat: 10},
    {sku: 'item2',skunm: 'item Name2', qty:10, scanqty:20, stat: 10},
    {sku: 'item2',skunm: 'item Name2', qty:10, scanqty:20, stat: 10},
  ]
  return (
    <div className="container">
      <section className={css['search-area']}>
        <SearchInput text={'Order No.'} labelStyle={{width}}/>
        <Input text={'Ship to'} labelStyle={{width}}/>
      </section>

      <div className="content-title">Order List</div>
      <section className={css["content-list"]}>
        <Grid data={data} config={config} />
      </section>

      <button className={css['reset']}>클리어</button>
    </div>
  )
}

export default OrderScan