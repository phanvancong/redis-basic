const Hashes = (redis) => {
  redis.hmset('user:1', 'first-name', 'cong', 'last-name', 'phan');
  redis.hgetall('user:1', (er, rs) => {
    console.log('hgetall:', rs);
  });
};

export default Hashes;
