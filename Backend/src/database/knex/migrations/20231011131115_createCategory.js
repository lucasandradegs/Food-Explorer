exports.up = knex => knex.schema.createTable("category", table => {
    table.increments("id")
    table.text("name").notNullable()

    table.integer("plate_id").references("id").inTable("plates").onDelete("CASCADE")
    table.integer("user_id").references("id").inTable("users")
    table.timestamp("created_at").default(knex.fn.now())
}) 
  

exports.down = knex => knex.schema.dropTable("category");