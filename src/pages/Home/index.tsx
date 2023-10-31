import { Badge, Button, Card, Grid, Group, Image, Text } from "@mantine/core";
import PromotionBanners from "./PromotionBanners";
import { useEffect, useState } from "react";
import { Product } from "../../interfaces/products";

const Home = () => {
  const [isFetchingProducts, setFetchingProducts] = useState<boolean>(false);
  const [products, setProducts] = useState<Product[]>([]);

  const USDollar = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  const handleApplyDiscount = (price: number, discount: number) => {
    const dicountValue = (discount / 100) * price;

    return price - dicountValue;
  };

  useEffect(() => {
    setFetchingProducts(true);
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((items) => setProducts(items.products));
    setFetchingProducts(false);
  }, []);

  return (
    <>
      <PromotionBanners />
      {!isFetchingProducts && (
        <Grid align="center" columns={6} className="mt-3">
          {products?.map((product: Product) => (
            <Grid.Col span={1}>
              <Card
                className="m-2 h-80"
                key={product.id}
                shadow="sm"
                padding="lg"
                radius="md"
                withBorder
              >
                <Card.Section>
                  <Image
                    fit="contain"
                    className="h-32"
                    src={product?.thumbnail}
                    alt={product.title}
                  />
                </Card.Section>

                <div className="pt-2">
                  <Text>{product.title}</Text>

                  <Group justify="space-between" mt="md" mb="xs">
                    <div>
                      <Text td="line-through" c="dimmed">
                        {USDollar.format(product.price)}
                      </Text>
                      <Text fw={700}>
                        {USDollar.format(
                          handleApplyDiscount(
                            product.price,
                            product.discountPercentage
                          )
                        )}
                      </Text>
                    </div>

                    <Badge color="pink" variant="light">
                      -{product.discountPercentage}%
                    </Badge>
                  </Group>
                </div>

                <Button
                  variant="light"
                  color="dark"
                  fullWidth
                  mt="md"
                  radius="md"
                >
                  Add to Cart
                </Button>
              </Card>
            </Grid.Col>
          ))}
        </Grid>
      )}
    </>
  );
};

export default Home;
