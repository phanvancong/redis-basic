const Lists = (redis) => {
  if (redis.exists('planets')) {
    redis.del('planets');
  }

  redis.rpush('planets', 'venus', 'earth');
  redis.lpush('planets', 'jupiter', 'mars');
  redis.lrange('planets', 0, -1, (er, rs) => {
    console.log('planets:', rs);
  });
  
  redis.lpop('planets');
  redis.lrange('planets', 0, -1, (er, rs) => {
    console.log('planets:', rs);
  });
};

export default Lists;
