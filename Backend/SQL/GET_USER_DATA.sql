SELECT
    PRODUCT,
    CUSTOMER,
    PURCHASECOUNT,
    ECOMMERCE_PRODUCT_NAME,
    CURRENT_PRICE,
    REGULAR_PRICE,
    URL
FROM
    JOSUELOZANO.SHOPPINGFREQUENCY
WHERE
    "CUSTOMER" = 'Alice';