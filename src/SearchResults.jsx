// src/components/SearchResults.jsx
import React, { useMemo } from 'react';
import { useSearchParams, NavLink } from 'react-router-dom';
import { ITEMS } from '../data/items';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const CATEGORY_LABEL = {
  veg: 'Veg Items',
  nonveg: 'Non-Veg Items',
  milk: 'Milk & Dairy',
  chocolate: 'Chocolates',
  drinks: 'Drinks',
  fruits: 'Fruits'
};

export default function SearchResults() {
  const [searchParams] = useSearchParams();
  const q = (searchParams.get('q') || '').trim().toLowerCase();

  // memoized filtering
  const grouped = useMemo(() => {
    if (!q) return {};
    const res = {};
    for (const item of ITEMS) {
      const hay = `${item.name} ${item.description} ${item.category}`.toLowerCase();
      if (hay.includes(q)) {
        if (!res[item.category]) res[item.category] = [];
        res[item.category].push(item);
      }
    }
    return res;
  }, [q]);

  const hasResults = Object.keys(grouped).length > 0;

  return (
    <Container className="py-4">
      <h3>Search results for: <em>{q || '—'}</em></h3>

      {!q && (
        <div className="text-muted my-3">Enter a search term to find items across categories.</div>
      )}

      {q && !hasResults && (
        <div className="alert alert-warning my-3">No items found for "{q}". Try another keyword.</div>
      )}

      {hasResults && Object.keys(grouped).map((cat) => (
        <section key={cat} className="mb-5">
          <h4 className="mb-3">{CATEGORY_LABEL[cat] || cat}</h4>
          <Row xs={1} sm={2} md={3} lg={4} className="g-4">
            {grouped[cat].map(item => (
              <Col key={item.id}>
                <Card className="h-100">
                  {item.image && <Card.Img variant="top" src={item.image} style={{ objectFit: 'contain', height: 160 }} />}
                  <Card.Body className="d-flex flex-column">
                    <Card.Title>{item.name}</Card.Title>
                    <Card.Text className="text-muted" style={{ flex: 1 }}>{item.description}</Card.Text>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="fw-bold">₹{item.price}</div>
                      <Button as={NavLink} to={`/cart`} variant="primary" size="sm">Add</Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </section>
      ))}
    </Container>
  );
}
