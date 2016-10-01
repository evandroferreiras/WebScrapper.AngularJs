using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WebScrapper.Core.Helpers.Application;
using WebScrapper.Core.Helpers.Domain;

namespace WebScrapper.Core.Helpers.Repository
{
    public class StubRepository<T> : IRepository<T> where T : IDomainEntity
    {
        private readonly List<T> _entities;
        public StubRepository(List<T> entities)
        {
            _entities = entities;
        }
        public Guid Add(T entity)
        {
            _entities.Add(entity);
            return entity.Id;

        }

        public void Remove(T entity)
        {
            _entities.Remove(entity);
        }

        public T FindById(T entity)
        {
            return _entities.FirstOrDefault(x => x.Id == entity.Id);
        }

        public List<T> ListAll()
        {
            return _entities;
        }
    }
}
