class producto {
    constructor(pool) {
        this.pool = pool;
    }
    getProducto = async (req, res) => {
        const response = await this.pool.query('SELECT * FROM productos');
        res.status(200).json(response.rows);
    }

    createProducto = async (req, res) => {
        const { idProducto, nombre, precioBase, fecha, descripcion, idusuario } = req.body;
        const response =
            await this.pool.query('insert into productos(idproducto, nombre, precioBase, fecha, descripcion, idusuario) values ($1,$2)',
                [idProducto, nombre, precioBase, fecha, descripcion, idusuario]);
        console.log(response);
        res.json({
            message: 'product added succesfully',
            body: {
                idproducto,
                nombre,
                precioBase,
                fecha,
                descripcion,
                idusuario
            }
        })
    }

    deleteProducto = async (req, res) => {
        const id = req.params.id;
        await this.pool.query('delete from productos where idproducto = $1', [id]);
        const response = await this.pool.query('delete from idproducto where id = $1', [id]);
        console.log(response);
        res.json(`Product ${id} deleted succesfully`)
    }
}

module.exports = producto;