"use client";

import { Avatar, Row, Col } from 'antd';
import Link from 'next/link';
import { Model_PartnerBrand } from '../cms/[[...any]]/models';

const PartnerBrands = ({partnerBrands}:{partnerBrands:Model_PartnerBrand[]}) => {
  return (
    <div style={{ padding: '2rem' }}>
      <Row gutter={[16, 16]}>
        {partnerBrands.map((brand, index) => (
          <Col key={index} xs={12} sm={8} md={6} lg={4}>
            {/* @ts-ignore */}
            <Link href={brand.id}>
              <a>
                <Avatar src={brand.logo} alt={brand.name} size={120} />
                <p>{brand.name}</p>
              </a>
            </Link>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default PartnerBrands;